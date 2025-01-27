'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
  children: React.ReactNode,
  href: string
}

export default function MenuItem({ children, href}: Props) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href}>
      {children}
    </Link>
  )
}
