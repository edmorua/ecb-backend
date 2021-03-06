import mongoose, { Schema } from 'mongoose'

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  estimateDate: { type: Date, required: true },
  carId: { type: Number, required: true}
})


export default mongoose.model('User', UserSchema)