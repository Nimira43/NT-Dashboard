'use client'


import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

export default function TeamDistributionChart() {
  const data= [
    {
      name: 'Eagles',
      value: 31,
      colour: '#ff4500'
    },
    {
      name: 'Lions',
      value: 39,
      colour: '#ffd700'
    },
    {
      name: 'Rhinos',
      value: 30,
      colour: '#00ff00'
    }
  ]

  return (
    <ResponsiveContainer
      width='100%'
      height={150}
    >
      <PieChart>
        <Tooltip 
          labelClassName='font-medium'
          wrapperClassName='[&_.recharts-tooltip-item]:!text-white dark:!bg-dark rounded-sm !text-sm'
        />
        <Pie 
          data={data} 
          dataKey='value'
          nameKey='name'
        >
          {data.map((dataItem, i) => (
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