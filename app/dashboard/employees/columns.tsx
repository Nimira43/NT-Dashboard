'use client'

import { ColumnDef } from '@tanstack/react-table'

export type Employee = {
  id: number
  firstName: string,
  lastName: string,
  teamName: string,
  isTeamLeader: boolean,
  avatar: string,
}

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: 'avatar',
    header: 'Status'
  }
]