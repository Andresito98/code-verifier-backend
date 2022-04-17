import dotenv from 'dotenv'
import server from './src/server'
import { LogError, LogSuccess } from './src/utils/logger'

// * Configuration the .env file
dotenv.config()

const port = process.env.PORT || 8000

// * Execute SERVER
server.listen(port, () => {
  LogSuccess(`[SERVER ON]: Running in http://localhost:${port}/api`)
})

// * Control SERVER ERROR
server.on('error', (error) => {
  LogError(`[SERVER ERROR]: ${error}`)
})

// import express, { Express, Request, Response } from 'express'
// import dotenv from 'dotenv'

// // Configuration the .env file
// dotenv.config()

// // Create Express APP
// const app: Express = express()
// const port: string | number = process.env.PORT || 8000

// // Define the first Route of APP
// app.get('/', (req:Request, res:Response) => {
//   // Send Hello World
//   res.send('Welcome to API Restfull: APP Express + Nodemon + Jest + TS + Swagger + Mongoose')
// })

// app.get('/hello', (req:Request, res:Response) => {
//   // Send Hello World
//   res.send('Welcome to GET Route: !Helloo2qwrfqwtfgqwtfg')
// })

// // Execute APP and Listen Requests to PORT
// app.listen(port, () => {
//   console.log(`EXPRESS SERVER: Running at http://localhost:${port}`)
// })

// app.get('/prueba1', (req:Request, res:Response) => {
//   res.send({ message: 'Goodbye, world' })
// })

// app.get('/prueba2/:name', (req:Request, res:Response) => {
//   res.send({ message: `Hola ${req.params.name}` })
// })
