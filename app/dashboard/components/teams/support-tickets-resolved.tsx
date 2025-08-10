'use client'

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
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
          stroke='#888888'
        />
        <YAxis 
          fontSize={12} 
          stroke='#888888'
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
        <Legend 
          formatter={
            (value) => 
            <span
              className='capitalize'
            >
              {value}
            </span>
          }
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
