import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Loading() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Employees
        </CardTitle>
      </CardHeader>
      <CardContent 
        className='grid grid-cols-[60px_1fr_1fr_1fr_1fr]'
      >

      </CardContent>
    </Card>
  )
}