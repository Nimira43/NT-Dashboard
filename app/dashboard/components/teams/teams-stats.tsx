import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import kb from '@/public/images/Karl-Brent.jpg'
import Link from 'next/link'
import { BiUser, BiUserCheck, BiUserX } from 'react-icons/bi'
import { RxCrossCircled, RxCheckCircled } from 'react-icons/rx'
import { GoThumbsup } from 'react-icons/go'
import { LuTicketCheck } from 'react-icons/lu'


export default function EmployeesStats() {
  const totalEmployees = 173
  const employeesAttending = 130
  const employeesAttendingPresent = parseFloat(((employeesAttending / totalEmployees) * 100).toFixed(2))
  return (
    <>
      <div className='grid lg:grid-cols-3 gap-4'>
        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='font-normal text-base'>
              Total Teams
            </CardTitle>
          </CardHeader>
          <CardContent className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
              <BiUser className='text-xl' />
              <div className='text-4xl font-light'>Total Teams</div>
            </div>
            <div>
              <Button
                size='xs'
                asChild
                className='uppercase'
              >
                <Link
                  href='/dashboard/teams'
                >
                  View
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='font-normal text-base'>
              Supervisors
            </CardTitle>
          </CardHeader >
          <CardContent className='flex justify-between items-center'>
            
          </CardContent>
          
        </Card>
        <Card className='border-main'>
        <CardHeader className='pb-2'>
            <CardTitle className='font-normal text-base'>
              Team Distribution
            </CardTitle>
          </CardHeader>
          <CardContent className='flex gap-2 items-center'>

          </CardContent>
        </Card>
      </div>
      <Card className='my-4'>
        <CardHeader>
          <CardTitle className='flex items-center text-lg gap-2 font-normal'>
            <LuTicketCheck />
            <span>Support Tickets Resolved</span>
          </CardTitle>
        </CardHeader>
        <CardContent className='pl-0'>
          Teams Chart
        </CardContent>
      </Card>
    </>   
  )
}