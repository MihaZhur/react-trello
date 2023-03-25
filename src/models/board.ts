import { Column } from './column'
export interface Board {
  id: string
  title: string
  favorite: boolean
  columns?: Column['id']
}
