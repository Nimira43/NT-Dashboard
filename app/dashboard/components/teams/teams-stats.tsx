import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { TbUsers } from 'react-icons/tb'
import { LuTicketCheck } from 'react-icons/lu'
import { AiOutlinePieChart } from 'react-icons/ai'
import Image from 'next/image'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { BiStar } from 'react-icons/bi'
import TeamDistributionChart from './team-distribution-chart'
import SupportTicketsResolved from './support-tickets-resolved'
import { supervisors } from '@/data/mock-data'

export default function TeamStats() {
  
  return (
    <>
      <div className='grid lg:grid-cols-3 gap-4'>
        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='font-normal text-base'>
              Total Teams
            </CardTitle>
          </CardHeader>
          <CardContent className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
              <TbUsers className='text-xl' />
              <div className='text-4xl font-light'>6</div>
            </div>
            <div>
              <Button
                size='xs'
                asChild
                className='uppercase'
              >
                <Link
                  href='/dashboard/teams'
                >
                  View
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='font-normal text-base flex justify-between items-center'>
              <span>Supervisors</span>
              <BiStar />
            </CardTitle>
          </CardHeader >
          <CardContent className='flex flex-wrap gap-2'>
            {supervisors.map(supervisor => (
              <TooltipProvider 
                key={`${supervisor.firstName} ${supervisor.lastName}`}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar>
                      {!!supervisor.avatar &&
                        <Image 
                          src={supervisor.avatar} 
                          alt={`${supervisor.firstName} ${supervisor.lastName}'s photo.`}

                        />
                      }
                      <AvatarFallback>
                        {supervisor.firstName[0]}
                        {supervisor.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    {supervisor.firstName} {supervisor.lastName}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </CardContent>        
        </Card>
        <Card>
        <CardHeader className='pb-2'>
            <CardTitle className='font-normal text-base flex justify-between items-center'>
              <span>Team Distribution</span>
              <AiOutlinePieChart />
            </CardTitle>
          </CardHeader>
          <CardContent className='pb-0'>
            <TeamDistributionChart />
          </CardContent>
        </Card>
      </div>
      <Card className='my-4'>
        <CardHeader>
          <CardTitle className='flex items-center text-lg gap-2 font-normal'>
            <LuTicketCheck />
            <span>Support Tickets Resolved</span>
          </CardTitle>
        </CardHeader>
        <CardContent className='pl-0'>
          <SupportTicketsResolved />
        </CardContent>
      </Card>
    </>   
  )
}