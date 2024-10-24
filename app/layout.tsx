import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'

const mulish= Mulish({ 
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
})

export const metadata: Metadata = {
  title: 'NT Dashboard',
  description: 'Signup forms and dashboard using Shad-cn components',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(mulish.className, 'dark')}>{children}</body>
    </html>
  )
}
