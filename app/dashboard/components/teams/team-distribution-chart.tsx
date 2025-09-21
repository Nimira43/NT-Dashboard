'use client'

import { teamsData } from '@/data/mock-data'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

export default function TeamDistributionChart() {

  return (
    <ResponsiveContainer
      width='100%'
      height={150}
    >
      <PieChart>
        <Tooltip 
          labelClassName='font-medium'
          wrapperClassName='dark:[&_.recharts-tooltip-item]:!text-white [&_.recharts-tooltip-item]:!text-black dark:!bg-dark rounded-sm !text-sm'
        />
        <Pie 
          data={teamsData} 
          dataKey='value'
          nameKey='name'
        >
          {teamsData.map((dataItem, i) => (
            <Cell 
              key={i}
              fill={dataItem.colour} 
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}