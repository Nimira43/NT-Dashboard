import { Button } from '@/components/ui/button'
import { RiDashboardLine } from 'react-icons/ri'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <>
      <h1 className='flex gap-2 items-center logo text-main'>
        <RiDashboardLine size={50}/> 
        NT Dashboard
      </h1>
      <p>Project Management Support Dashboard</p>
      <div className='flex gap-2 items-center'>
        <Button asChild >
          <Link href='/login' className='uppercase'>Login</Link>
        </Button>
        <small>or</small>
        <Button asChild variant='outline'>
          <Link href='/sign-up' className='uppercase'>Sign Up</Link>    
        </Button>
      </div> 
    </>
  )
}