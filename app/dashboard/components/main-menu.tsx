import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import MenuItem from './menu-item'
import MenuTitle from './menu-title'

export default function MainMenu() {
  
  return (
    <div className='bg-dark-extra overflow-auto p-4'>
      <div className='border-b dark:border-b-light border-b-main-dark pb-4'>
        <MenuTitle />
      </div>
      <div className='py-4
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
      <div className='flex gap-2 items-center'>
        <Avatar>
          <AvatarFallback className='bg-main'>
            NR
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}