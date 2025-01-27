import { Satellite } from "lucide-react";

export default function MenuTitle() {
  return (
    <h4 className='flex items-center'>
      <Satellite 
        size={40} 
        className='text-[#ea580c]'
      /> 
      <span className='pl-2'>NimiraTech</span>

    </h4>
  )
}
