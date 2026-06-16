import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import path from 'path'

export async function GET() {
  const svg = await readFile(path.join(process.cwd(), 'public', 'brain-circuit-dark.svg'))

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
