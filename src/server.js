import app from './app.js'
import dotenv from 'dotenv'
import dataBaseConnect from './database/index.js'

dotenv.config()

const port = process.env.PORT || 4000

process.on('uncaughtException', (err) => {
  console.log(`Error: ${err.message}`)
  console.log('Shutting down server due to uncaught exception')
  process.exit(1)
})

dataBaseConnect.getConnect()

const server = app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
})

process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`)
  console.log('Shutting down server due to uncaught exception')
  
  server.close(() => {
    process.exit(1)
  })
})