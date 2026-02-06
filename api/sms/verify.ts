// @ts-nocheck
/*
  Vercel serverless function: /api/sms/verify
  Validates code against token produced by /api/sms/send
  Env required: APP_SECRET
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

const parseToken = (token: string) => {
  const [payloadB64, signature] = (token || '').split('.')
  if (!payloadB64 || !signature) return null
  try {
    const payloadJson = Buffer.from(payloadB64.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8')
    const payload = JSON.parse(payloadJson)
    return { payload, signature }
  } catch {
    return null
  }
}

export default async function handler(req: any, res: any) {
  setCors(res)
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }
  if (req.method !== 'POST') return json(res, 405, { ok: false, error: 'Method Not Allowed' })

  const secret = process.env.APP_SECRET
  if (!secret) return json(res, 500, { ok: false, error: 'Server misconfiguration: APP_SECRET missing' })

  // Support both parsed and raw bodies
  const getBody = async () => {
    if (req.body) return req.body
    const chunks: any[] = []
    for await (const chunk of req) chunks.push(chunk)
    const raw = Buffer.concat(chunks).toString('utf8')
    try { return JSON.parse(raw) } catch { return {} }
  }
  const body = await getBody()
  const { token, code } = body || {}
  if (!token || !code) return json(res, 400, { ok: false, error: 'Missing token or code' })

  const parsed = parseToken(token)
  if (!parsed) return json(res, 400, { ok: false, error: 'Invalid token' })

  const { payload, signature } = parsed as any
  const { phone, exp, salt } = payload || {}
  if (!phone || !exp || !salt) return json(res, 400, { ok: false, error: 'Bad token payload' })

  const now = Math.floor(Date.now() / 1000)
  if (now > Number(exp)) return json(res, 400, { ok: false, error: 'Code expired' })

  // Rebuild signature with provided code and compare
  const expected = sign(secret, `${String(code)}|${String(phone)}|${String(exp)}|${String(salt)}`)
  if (expected !== signature) return json(res, 400, { ok: false, error: 'Invalid code' })

  return json(res, 200, { ok: true })
}
