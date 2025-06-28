import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { TbUsers } from 'react-icons/tb'
import { LuTicketCheck } from 'react-icons/lu'
import Image from 'next/image'
import jl from '@/public/images/Jess-Lytton.jpg'
import tw from '@/public/images/Tom-Wilkins.jpg'
import kb from '@/public/images/Karl-Brent.jpg'
import { Tooltip, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const supervisors = [
  {
    firstName: 'Saeed',
    lastName: 'Malik',
  },
  {
    firstName: 'Jess',
    lastName: 'Lytton',
    avatar: jl,
  },
  {
    firstName: 'Karl',
    lastName: 'Brent',
    avatar: kb,
  },
  {
    firstName: 'Selina',
    lastName: 'Thompson',
  },
  {
    firstName: 'Tom',
    lastName: 'Wilkins',
    avatar: tw,
  },
  {
    firstName: 'Amy',
    lastName: 'Rhodes',
  },
]

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
              <div className='text-4xl font-light'>5</div>
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
            <CardTitle className='font-normal text-base'>
              Supervisors
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
                </Tooltip>
              </TooltipProvider>
            ))}
          </CardContent>        
        </Card>
        <Card>
        <CardHeader className='pb-2'>
            <CardTitle className='font-normal text-base'>
              Team Distribution
            </CardTitle>
          </CardHeader>
          <CardContent className='flex gap-2 items-center'>

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
          Teams Chart
        </CardContent>
      </Card>
    </>   
  )
}