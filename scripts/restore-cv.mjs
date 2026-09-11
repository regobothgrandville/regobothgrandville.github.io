import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { spawnSync } from 'node:child_process'

let payload = ''
for (let i = 0; i < 8; i++) payload += readFileSync(`scripts/cv-final/${String(i).padStart(2, '0')}.b64`, 'utf8').trim()
const compressed = Buffer.from(payload, 'base64')
if (compressed.length !== 91104) throw new Error(`CV xz size mismatch: ${compressed.length}`)
const result = spawnSync('xz', ['-dc'], { input: compressed, maxBuffer: 2 * 1024 * 1024 })
if (result.status !== 0) throw new Error(`CV xz decompression failed: ${result.stderr.toString()}`)
const pdf = result.stdout
const sha = createHash('sha256').update(pdf).digest('hex')
const expected = '1999a1d843afac51a0c2ba7ce18f1a72e23845d2eabd046de89e2162bc0133ae'
if (pdf.length !== 123975) throw new Error(`CV size mismatch: ${pdf.length}`)
if (sha !== expected) throw new Error(`CV sha256 mismatch: ${sha}`)
mkdirSync('public', { recursive: true })
writeFileSync('public/CV_GRANDVILLE_Regoboth_BUT3RT_Stage.pdf', pdf)
console.log(`CV restored exactly: ${pdf.length} bytes, sha256 ${sha}`)
