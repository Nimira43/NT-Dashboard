import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BiUser } from 'react-icons/bi'

export default function EmployeesStats() {
  return (
    <div className='grid lg:grid-cols-3 gap-4'>
      <Card>
        <CardHeader>
          <CardTitle className='font-normal text-base'>
            Total Employees
          </CardTitle>
          <CardContent className='flex justify-between'>
            <div className='flex gap-2'>
              <BiUser />
            </div>
            <div>2</div>
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