import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DataTable } from '@/components/ui/data-table'
import { employees } from '@/data/mock-data'
import { setTimeout } from 'timers/promises'
import { columns } from './columns'

export default async function EmployeesPage() {
  await setTimeout(5000)

  return (
     <Card>
      <CardHeader>
        <CardTitle>
          Employees
        </CardTitle>
      </CardHeader>
      <CardContent 
        className='grid grid-cols-[60px_1fr_1fr_1fr_1fr] gap-4 items-center'
      >
        <DataTable 
          columns={columns}
          data={employees}
        />
      </CardContent>
    </Card>
  )
}