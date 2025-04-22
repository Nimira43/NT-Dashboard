import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

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

      </TabsContent>
      <TabsContent value='teams'>

      </TabsContent>
    </Tabs>
  )
}
