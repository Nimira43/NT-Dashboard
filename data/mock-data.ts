
import { type Employee } from '@/app/dashboard/employees/columns'

export const employees: Employee[] = [
  {
    id: 1,
    firstName: 'Jessica',
    lastName: 'Lytton',
    teamName: 'Eagles',
    isTeamLeader: true,
    avatar: "/images/jl.jpg",
  },
  { id: 2,
    firstName: 'Owen',
    lastName: 'Goldsmith',
    teamName: 'Lions',
    isTeamLeader: false,
  },
  { id: 3,
    firstName: 'Emma',
    lastName: 'Houghton',
    teamName: 'Rhinos',
    isTeamLeader: false,
  },
  {
    id: 4,
    firstName: 'Karl',
    lastName: 'Brent',
    teamName: 'Rhinos',
    isTeamLeader: true,
    avatar: "/images/kb.jpg",
  },
  { id: 5,
    firstName: 'Selina',
    lastName: 'Thompson',
    teamName: 'Lions',
    isTeamLeader: true,
  },
  { id: 6,
    firstName: 'Mark',
    lastName: 'Abbots',
    teamName: 'Eagles',
    isTeamLeader: false,
  },
  { id: 7,
    firstName: 'Helena',
    lastName: 'Coleman',
    teamName: 'Eagles',
    isTeamLeader: false,
  },
  { id: 8,
    firstName: 'Wayne',
    lastName: 'Foster',
    teamName: 'Rhinos',
    isTeamLeader: false,
  },
  {
    id: 9,
    firstName: 'Tom',
    lastName: 'Wilkins',
    teamName: 'Lions',
    isTeamLeader: true,
    avatar: "/images/tw.jpg",
  },
]

export const teamsData = [
  {
    name: 'Eagles',
    value: 31,
    colour: '#ff4500'
  },
  {
    name: 'Lions',
    value: 39,
    colour: '#ffd700'
  },
  {
    name: 'Rhinos',
    value: 30,
    colour: '#00ff00'
  }
]

export const employeeAttendingData = [
  {
    name: 'Jan',
    office: 128,
    home: 27,
  },
  {
    name: 'Feb',
    office: 137,
    home: 21,
  },
  {
    name: 'Mar',
    office: 135,
    home: 23,
  },
  {
    name: 'Apr',
    office: 141,
    home: 17,
  },
  {
    name: 'May',
    office: 147,
    home: 13,
  },
  {
    name: 'Jun',
    office: 139,
    home: 12,
  },
  {
    name: 'Jul',
    office: 135,
    home: 14,
  },
  {
    name: 'Aug',
    office: 111,
    home: 34,
  },
  {
    name: 'Sep',
    office: 151,
    home: 8,
  },
  {
    name: 'Oct',
    office: 143,
    home: 11,
  },
  {
    name: 'Nov',
    office: 148,
    home: 19,
  },
  {
    name: 'Dec',
    office: 130,
    home: 26,
  },
]

export const ticketsData = [
  {
    name: 'Jan',
    eagles: 19,
    lions: 35,
    rhinos: 32,
  },
  {
    name: 'Feb',
    eagles: 33,
    lions: 21,
    rhinos: 27,
  },
  {
    name: 'Mar',
    eagles: 23,
    lions: 31,
    rhinos: 26,
  },
  {
    name: 'Apr',
    eagles: 14,
    lions: 30,
    rhinos: 22,
  },
  {
    name: 'May',
    eagles: 33,
    lions: 20,
    rhinos: 34,
  },
  {
    name: 'Jun',
    eagles: 32,
    lions: 31,
    rhinos: 18,
  },
  {
    name: 'Jul',
    eagles: 31,
    lions: 29,
    rhinos: 25,
  },
  {
    name: 'Aug',
    eagles: 33,
    lions: 22,
    rhinos: 32,
  },
  {
    name: 'Sep',
    eagles: 36,
    lions: 25,
    rhinos: 34,
  },
  {
    name: 'Oct',
    eagles: 28,
    lions: 23,
    rhinos: 31,
  },
  {
    name: 'Nov',
    eagles: 29,
    lions: 38,
    rhinos: 32,
  },
  {
    name: 'Dec',
    eagles: 25,
    lions: 33,
    rhinos: 35,
  },
]