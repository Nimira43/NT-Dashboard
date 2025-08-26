import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import MenuItem from './menu-item'
import MenuTitle from './menu-title'
import Link from 'next/link'
import { LightDarkToggle } from '@/components/ui/light-dark-toggle'
import { cn } from '@/lib/utils'

export default function MainMenu(
  {className}: {
    className?: string
  }) {
  return (
    <nav 
      className={
        cn(
          `md:bg-grey-light-extra md:dark:bg-grey-dark overflow-auto p-4 flex flex-col`, 
          className
        )
      }>
      <header className='hidden md:block border-b border-b-main pb-4'>
        <MenuTitle />
      </header>
      <div className='py-4 grow uppercase
      '>
        <MenuItem href='/dashboard'>
          Dashboard
        </MenuItem>
        <MenuItem href='/dashboard/teams'>
          Teams
        </MenuItem>
        <MenuItem href='/dashboard/employees'>
          Employees
        </MenuItem>
        <MenuItem href='/dashboard/account'>
          Account
        </MenuItem>
        <MenuItem href='/dashboard/settings'>
          Settings
        </MenuItem>
      </div>
      <footer className='flex gap-2 items-center'>
        <Avatar>
          <AvatarFallback className='bg-main'>
            NR
          </AvatarFallback>
        </Avatar>
        <Link
          href='/'
          className='uppercase text-main hover:text-main-dark cursor-pointer transition-colors duration-500'
        >
          Logout
        </Link>
        <LightDarkToggle className='ml-auto' />
      </footer>
    </nav>
  )
}