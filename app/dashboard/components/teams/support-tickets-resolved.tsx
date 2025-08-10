'use client'

import { CartesianGrid, Line, LineChart, ResponsiveContainer } from 'recharts'
import { ticketsData } from './teams-data'

export default function SupportTicketsResolved() {
  return (
    <ResponsiveContainer
      height={350}
      width='100%'
    >
      <LineChart 
        data={ticketsData}
      >
        <CartesianGrid strokeDasharray='3' />
        <Line dataKey='eagles' />
        <Line dataKey='lions' />
        <Line dataKey='rhinos' />
      </LineChart>

    </ResponsiveContainer>
  )
}
// {
//       name: 'Eagles',
//       value: 31,
//       colour: '#ff4500'
//     },
//     {
//       name: 'Lions',
//       value: 39,
//       colour: '#ffd700'
//     },
//     {
//       name: 'Rhinos',
//       value: 30,
//       colour: '#00ff00'
//     }