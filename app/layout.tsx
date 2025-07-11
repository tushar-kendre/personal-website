import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tushar Kendre - Portfolio',
  description: 'Resume of Tushar Kendre, a Full Stack Developer',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
