import { Task } from './task'

export interface Column {
  id: string
  title: string
  position: number
  tasks?: Task['id']
}
