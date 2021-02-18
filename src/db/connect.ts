import mongoose from 'mongoose';

const connectDb = async (urlDB: string) => {
  try {
    await mongoose.connect(urlDB, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('db connected!....')
  } catch (error) {
    console.log(error.message)
  }
}


export default connectDb