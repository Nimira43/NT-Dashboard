'use client'

import { Avatar } from '@/components/ui/avatar'
import { ColumnDef } from '@tanstack/react-table'
import Image from 'next/image'

export type Employee = {
  id: number
  firstName: string,
  lastName: string,
  teamName: string,
  isTeamLeader: boolean,
  avatar?: string,
}

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: 'avatar',
    header: '',
    cell: ({row}) => {
      const avatar: string = row.getValue('avatar')
      const firstName = row.getValue('firstName')
      const lastName = row.getValue('lastName')

      return (
        <Avatar>
          {!!avatar && 
            <Image 
              src={avatar}
              alt={`${firstName} ${lastName} avatar`}
            
            />              
          }

        </Avatar>
      )
    } 
  },
  {
    accessorKey: 'firstName',
    header: 'First Name'
   },
  {
    accessorKey: 'lastName',
    header: 'Last Name'
  },
  {
    accessorKey: 'teamName',
    header: 'Team'
  },
  {
    accessorKey: 'isTeamLeader',
    header: ''
  },
]