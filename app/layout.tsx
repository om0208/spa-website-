import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Serenity Spa - Luxury Wellness Experience',
  description: 'Experience ultimate relaxation and rejuvenation at Serenity Spa. Premium massage therapy, facial treatments, and wellness services in a tranquil environment.',
  keywords: 'spa, massage, facial, wellness, relaxation, therapy, luxury spa, beauty treatments',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}