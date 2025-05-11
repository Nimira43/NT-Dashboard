import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { BiUser } from 'react-icons/bi'

export default function EmployeesStats() {
  return (
    <div className='grid lg:grid-cols-3 gap-4'>
      <Card>
        <CardHeader>
          <CardTitle className='font-normal text-base'>
            Total Employees
          </CardTitle>
          <CardContent className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
              <BiUser className='text-xl' />
              <div className='text-4xl font-light'>73</div>
            </div>
            <div>
              <Button
                size='sm'
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
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className='font-normal text-base'>
            Employees Attending
          </CardTitle>
        </CardHeader>
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