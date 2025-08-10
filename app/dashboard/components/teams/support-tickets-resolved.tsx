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
          stroke='00ff00'
        />
      </LineChart>

    </ResponsiveContainer>
  )
}
