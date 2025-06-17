'use client'

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { data } from './employee-attending-data'

export default function WorkLocationTrends() {
  return (
    <ResponsiveContainer 
      height={350}
      width='100%'
    >
      <BarChart data={data}>
        <XAxis dataKey='name' fontSize={12} />
        <YAxis fontSize={12} />
        <Tooltip />
        <Bar 
          dataKey='office' 
          stackId={1} 
          fill='#ff4500' 
        />
        <Bar 
          dataKey='home' 
          stackId={1} 
          fill='#ffd700' 
          radius={[3, 3, 0, 0]}
        />
      </BarChart>

    </ResponsiveContainer> 
  )
}