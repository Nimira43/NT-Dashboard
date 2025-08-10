'use client'

import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
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
        <XAxis 
          fontSize={12} 
          dataKey='name' 
        />
        <YAxis 
          fontSize={12} 
        />
        <CartesianGrid 
          strokeDasharray='3' 
        />
        <Line 
          dataKey='eagles' 
          type='monotone'
          stroke='#ff4500'
        />
        <Line 
          dataKey='lions' 
          type='monotone'
          stroke='#ffd700'
        />
        <Line 
          dataKey='rhinos' 
          type='monotone'
          stroke='#00ff00'
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
