// @ts-nocheck
/*
  Vercel serverless function: /api/email/send
  Env required: RESEND_API_KEY, EMAIL_FROM, APP_SECRET
  Optional: EMAIL_MOCK=true to skip real sending
*/

const setCors = (res: any) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
}

const json = (res: any, status: number, data: any) => {
  setCors(res)
  res.status(status).setHeader('Content-Type', 'application/json').send(JSON.stringify(data))
}

import crypto from 'crypto'

const sign = (secret: string, data: string) => crypto.createHmac('sha256', secret).update(data).digest('hex')
const base64url = (s: string) => Buffer.from(s).toString('base64').replace(/=+$/,'').replace(/\+/g,'-').replace(/\//g,'_')

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email || '')

export default async function handler(req: any, res: any) {
  setCors(res)
  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return json(res, 405, { ok: false, error: 'Method Not Allowed' })

  const getBody = async () => {
    if (req.body) return req.body
    const chunks: any[] = []
    for await (const c of req) chunks.push(c)
    const raw = Buffer.concat(chunks).toString('utf8')
    try { return JSON.parse(raw) } catch { return {} }
  }
  const body = await getBody()
  const { email, subject } = body || {}

  const secret = process.env.APP_SECRET
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.EMAIL_FROM
  const mock = (process.env.EMAIL_MOCK || '').toLowerCase() === 'true'

  if (!secret) return json(res, 500, { ok: false, error: 'Server misconfiguration: APP_SECRET missing' })
  if (!apiKey && !mock) return json(res, 500, { ok: false, error: 'RESEND_API_KEY missing' })
  if (!from && !mock) return json(res, 500, { ok: false, error: 'EMAIL_FROM missing' })

  if (!isValidEmail(email)) return json(res, 400, { ok: false, error: 'Invalid email' })

  const code = String(Math.floor(1000 + Math.random() * 9000))
  const exp = Math.floor(Date.now() / 1000) + 5 * 60
  const salt = crypto.randomBytes(8).toString('hex')

  try {
    if (!mock) {
      const resp = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from,
          to: email,
          subject: subject || 'Ваш код подтверждения',
          text: `Ваш код подтверждения: ${code}. Срок действия 5 минут.`
        })
      })
      if (!resp.ok) {
        const details = await resp.text().catch(() => '')
        return json(res, 502, { ok: false, error: 'Failed to send email', details })
      }
    }

    const payload = { email, exp, salt }
    const payloadB64 = base64url(JSON.stringify(payload))
    const signature = sign(secret, `${code}|${email}|${exp}|${salt}`)
    const token = `${payloadB64}.${signature}`

    return json(res, 200, { ok: true, token })
  } catch (e: any) {
    return json(res, 500, { ok: false, error: 'Internal error', details: e?.message || String(e) })
  }
}
