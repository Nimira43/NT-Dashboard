import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import EmployeesStats from './components/employees-stats'

export default function DashboardPage() {
  return (
    <Tabs defaultValue='employees'>
      <TabsList>
        <TabsTrigger value='employees'>
          Employees Stats
        </TabsTrigger>
        <TabsTrigger value='Teams'>
          Teams Stats
        </TabsTrigger>
      </TabsList>
      <TabsContent value='employees'>
        <EmployeesStats />
      </TabsContent>
      <TabsContent value='teams'>
        Teams
      </TabsContent>
    </Tabs>
  )
}
