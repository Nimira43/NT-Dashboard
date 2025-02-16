'use client'

import { cn } from '@/lib/utils'
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
    <Link
      className={cn('block hover:bg-white dark:hover:bg-zinc-700 rounded-sm text-muted-foreground hover:text-foreground')}
      href={href}>
      {children}
    </Link>
  )
}
