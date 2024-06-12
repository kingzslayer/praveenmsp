import '@/styles/globals.css'
import { Metadata } from 'next'

export interface LayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: {
    default: 'Praveen M',
    template: '%s | Praveen M',
  },
  description: 'Personal website of Praveen Msp.',
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className="bg-slate-950 h-screen w-screen">{children}</body>
    </html>
  )
}
