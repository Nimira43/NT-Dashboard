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
      className={cn(
        'block p-2 hover:bg-light dark:hover:bg-dark rounded-sm text-main hover:text-foreground',
        isActive &&
        'bg-primary text-light hover:bg-light dark:hover:bg-dark '
      )}
      href={href}
    >
      {children}
    </Link>
  )
}
