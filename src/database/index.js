import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const db = `mongodb+srv://${process.env.DATABASE_NAME}:${process.env.DATABASE_PASS}@${process.env.DATABASE_USER}.qjbnc.mongodb.net/?retryWrites=true&w=majority`

const dataBaseConnect = {
  getConnect:() => {
    mongoose.connect(db, {
      useNewUrlParser:true,
      useUnifiedTopology:true
    })
    .then(() => console.log('Database Connected Successfully'))
  }
}

export default dataBaseConnect