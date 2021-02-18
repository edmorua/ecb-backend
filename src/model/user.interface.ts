import { Document } from 'mongoose'
export interface User extends Document {
  name: string,
  estimateDate: Date,
  carId: number
}