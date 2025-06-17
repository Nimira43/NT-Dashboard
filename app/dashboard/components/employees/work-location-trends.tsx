'use client'

import { Bar, BarChart, ResponsiveContainer } from 'recharts'
import { data } from './employee-attending-data'

export default function WorkLocationTrends() {
  return (
    <ResponsiveContainer 
      height={350}
      width='100%'
    >
      <BarChart data={data}>
        <Bar dataKey='office' stackId={1} fill='#ff4500' />
        <Bar dataKey='wfh' stackId={1} fill='#ffd700' />
      </BarChart>

    </ResponsiveContainer> 
  )
}