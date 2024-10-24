import { Button } from '@/components/ui/button'
import { Satellite } from 'lucide-react'
import Link from 'next/link'

export default function LandingPage() {
    return (
        <>
            <h1 className='flex gap-2 items-center'>
                <Satellite size={50} className='text-[#ea580c]'/> 
                NT Dashboard
            </h1>
            <p>Project Management Support Dashboard</p>
            <div className='flex gap-2 items-center'>
                <Button asChild >
                    <Link href='/login'>Login</Link>
                </Button>
                <small>or</small>
                <Button asChild variant='outline'>
                    <Link href='/sign-up'>Sign Up</Link>    
                </Button>
            </div> 
        </>
    )
}