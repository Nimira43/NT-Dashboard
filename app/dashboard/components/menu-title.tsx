import { RiDashboardLine } from 'react-icons/ri'

export default function MenuTitle() {
  return (
    <h4 className='flex items-center'>
      <RiDashboardLine  
        size={40} 
        className='text-main'
      /> 
      <span className='pl-2 text-main logo'>NimiraTech</span>

    </h4>
  )
}
