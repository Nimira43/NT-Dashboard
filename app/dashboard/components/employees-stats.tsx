import { Card, CardHeader, CardTitle } from '@/components/ui/card'

export default function EmployeesStats() {
  return (
    <div className='grid lg:grid-cols-3 gap-4'>
      <Card>
        <CardHeader>
          <CardTitle className='font-normal text-base'>
            Total Employees
          </CardTitle>
        </CardHeader>
      </Card>
      <Card>
        Card 2
      </Card>
      <Card className='border-main'>
        Card 3
      </Card>
    </div>
  )
}