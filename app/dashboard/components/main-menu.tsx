import MenuItem from './menu-item'
import MenuTitle from './menu-title'

export default function MainMenu() {
  
  return (
    <div className='bg-[#000] overflow-auto p-4'>
      <div className='border-b dark:border-b-[#fff] border-b-[#ea580c] pb-4'>
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
    </div>
  )
}