import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { BiUser, BiUserCheck, BiUserX } from 'react-icons/bi'
import { RxCrossCircled, RxCheckCircled } from 'react-icons/rx'

export default function EmployeesStats() {
  return (
    <div className='grid lg:grid-cols-3 gap-4'>
      <Card>
        <CardHeader>
          <CardTitle className='font-normal text-base'>
            Total Employees
          </CardTitle>
        </CardHeader>
        <CardContent className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <BiUser className='text-xl' />
            <div className='text-4xl font-light'>73</div>
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
        <CardHeader>
          <CardTitle className='font-normal text-base'>
            Employees Attending
          </CardTitle>
        </CardHeader>
        <CardContent className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <BiUserCheck className='text-xl' />
            <div className='text-4xl font-light'>48</div>
          </div>
        </CardContent>
        <CardFooter>
          <span className='text-xs text-green-500 flex gap-1 items-center'>
            <RxCheckCircled />
            80% of employees are active
          </span>
        </CardFooter>
      </Card>
      <Card className='border-main'>
      <CardHeader>
          <CardTitle className='font-normal text-base'>
            Employee Recognition
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  )
}