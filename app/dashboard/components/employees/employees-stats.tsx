import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import kb from '@/public/images/Karl-Brent.jpg'
import Link from 'next/link'
import { BiUser, BiUserCheck, BiUserX } from 'react-icons/bi'
import { RxCrossCircled, RxCheckCircled } from 'react-icons/rx'
import { GoThumbsup } from 'react-icons/go'
import { AiOutlineLaptop } from 'react-icons/ai'
import WorkLocationTrends from './work-location-trends'

export default function EmployeesStats() {
  const totalEmployees = 173
  const employeesAttending = 147
  const employeesAttendingPresent = parseFloat(((employeesAttending / totalEmployees) * 100).toFixed(2))
  return (
    <>
      <div className='grid lg:grid-cols-3 gap-4'>
        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='font-normal text-base'>
              Total Employees
            </CardTitle>
          </CardHeader>
          <CardContent className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
              <BiUser className='text-xl' />
              <div className='text-4xl font-light'>{totalEmployees}</div>
            </div>
            <div>
              <Button
                size='xs'
                asChild
                className='uppercase'
              >
                <Link
                  href='/dashboard/employees'
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
              Employees Attending
            </CardTitle>
          </CardHeader >
          <CardContent className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
              {employeesAttendingPresent > 75 ? ( 
                <BiUserCheck className='text-xl' />
              ) : (
                <BiUserX className='text-xl' />
              )}
              <div className='text-4xl font-light'>{employeesAttending}</div>
            </div>
          </CardContent>
          <CardFooter>
            {employeesAttendingPresent > 75 ? ( 
              <span className='text-xs text-green-500 flex gap-1 items-center'>
                <RxCheckCircled />
                {employeesAttendingPresent}% of employees are active
              </span>
            ) : (
              <span className='text-xs text-red-500 flex gap-1 items-center'>
                <RxCrossCircled />
                {employeesAttendingPresent}% of employees are active
            </span>
            )}
            
          </CardFooter>
        </Card>
        <Card className='border-main'>
        <CardHeader className='pb-2'>
            <CardTitle className='font-normal text-base'>
              Employee Recognition
            </CardTitle>
          </CardHeader>
          <CardContent className='flex gap-2 items-center'>
            <Avatar>
              <Image src={kb} alt='Employee Recognition'/>
              <AvatarFallback>KB</AvatarFallback>
            </Avatar>
            <span className='text-2xl'>Karl Brent</span>
          </CardContent>
          <CardFooter className='flex gap-2 items-center text-xs text-main'>
            <GoThumbsup className='text-main' />
            <span>Outstanding work Karl!</span>          
          </CardFooter>
        </Card>
      </div>
      <Card className='my-4'>
        <CardHeader>
          <CardTitle className='flex items-center text-lg gap-2 font-normal'>
            <AiOutlineLaptop />
            <span>Employee Work Location Trends</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <WorkLocationTrends />
        </CardContent>
      </Card>
    </>   
  )
}