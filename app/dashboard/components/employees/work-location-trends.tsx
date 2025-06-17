'use client'

import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
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
        <Legend 
          iconType='circle'
          formatter={(value) => {
            if (value === 'home') {
              return (
                <div className='text-sm'>Work from Home</div>
              )
            } else if (value === 'office') {
              return (
                <div className='text-sm'>Work from Office</div>
              ) 
            }
          }}
        />
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