import { Satellite } from "lucide-react";

export default function MenuTitle() {
  return (
    <h4 className='flex items-center'>
      <Satellite 
        size={40} 
        className='text-main'
      /> 
      <span className='pl-2 text-main'>NimiraTech</span>

    </h4>
  )
}
