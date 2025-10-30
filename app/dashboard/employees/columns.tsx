'use client'

import { ColumnDef } from '@tanstack/react-table'

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
      const avatar = row.getValue('avatar')
      const firstName = row.getValue('firstName')
      const lastName = row.getValue('lastName')
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