'use client'

import { Pie, PieChart, ResponsiveContainer } from 'recharts'

export default function TeamDistributionChart() {
  const data= [
    {
      name: 'Eagles',
      value: 37,
      colour: '#ff4500'
    },
    {
      name: 'Lions',
      value: 34,
      colour: '#ffd700'
    },
    {
      name: 'Rhinos',
      value: 29,
      colour: '#00ff00'
    }
  ]

  return (
    <ResponsiveContainer
      width='100%'
      height={150}
    >
      <PieChart>
        <Pie>
          
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}