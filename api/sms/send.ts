// @ts-nocheck
/*
  Vercel serverless function: /api/sms/send
  Env required: SMSC_LOGIN, SMSC_PASSWORD, APP_SECRET, optional: SMSC_SENDER, SMSC_MOCK
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

const base64url = (s: string) => Buffer.from(s).toString('base64').replace(/=+$/,'').replace(/\+/g,'-').replace(/\//g,'_')

import crypto from 'crypto'

const sign = (secret: string, data: string) => crypto.createHmac('sha256', secret).update(data).digest('hex')

const normalizePhone = (raw: string) => {
  const d = (raw || '').replace(/\D/g, '')
  if (!d) return ''
  // Expect Russian numbers: ensure leading 7
  let p = d
  if (p.startsWith('8')) p = '7' + p.slice(1)
  if (!p.startsWith('7')) p = '7' + p
  return p.slice(0, 11)
}

export default async function handler(req: any, res: any) {
  setCors(res)
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }
  if (req.method !== 'POST') return json(res, 405, { ok: false, error: 'Method Not Allowed' })

  // Support both parsed and raw bodies
  const getBody = async () => {
    if (req.body) return req.body
    const chunks: any[] = []
    for await (const chunk of req) chunks.push(chunk)
    const raw = Buffer.concat(chunks).toString('utf8')
    try { return JSON.parse(raw) } catch { return {} }
  }
  const body = await getBody()
  const { phone } = body || {}
  const login = process.env.SMSC_LOGIN
  const password = process.env.SMSC_PASSWORD
  const sender = process.env.SMSC_SENDER || ''
  const secret = process.env.APP_SECRET
  const mock = (process.env.SMSC_MOCK || '').toLowerCase() === 'true'

  if (!secret) return json(res, 500, { ok: false, error: 'Server misconfiguration: APP_SECRET missing' })
  if (!login || !password) return json(res, 500, { ok: false, error: 'Server misconfiguration: SMSC credentials missing' })

  const normalized = normalizePhone(phone)
  if (!/^7\d{10}$/.test(normalized)) return json(res, 400, { ok: false, error: 'Invalid phone' })

  // Generate 4-digit code
  const code = String(Math.floor(1000 + Math.random() * 9000))
  const exp = Math.floor(Date.now() / 1000) + 5 * 60 // 5 minutes
  const salt = crypto.randomBytes(8).toString('hex')
  const message = `Код подтверждения: ${code}. Никому не сообщайте его.`

  try {
    if (!mock) {
      const params = new URLSearchParams({
        login,
        psw: password,
        phones: normalized,
        mes: message,
        fmt: '3',
      })
      if (sender) params.set('sender', sender)

      const url = `https://smsc.ru/sys/send.php?${params.toString()}`
      const resp = await fetch(url)
      if (!resp.ok) {
        const text = await resp.text().catch(() => '')
        return json(res, 502, { ok: false, error: 'Failed to send SMS', details: text })
      }
      const data = await resp.json().catch(() => null)
      if (!data || data.error) {
        return json(res, 502, { ok: false, error: 'SMSC error', details: data })
      }
    }

    // Create HMAC token binding phone+exp+salt to the code
    const payload = { phone: normalized, exp, salt }
    const payloadB64 = base64url(JSON.stringify(payload))
    const signature = sign(secret, `${code}|${normalized}|${exp}|${salt}`)
    const token = `${payloadB64}.${signature}`

    return json(res, 200, { ok: true, token })
  } catch (e: any) {
    return json(res, 500, { ok: false, error: 'Internal error', details: e?.message || String(e) })
  }
}
