"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./src/server"));
const logger_1 = require("./src/utils/logger");
// * Configuration the .env file
dotenv_1.default.config();
const port = process.env.PORT || 8000;
// * Execute SERVER
server_1.default.listen(port, () => {
    (0, logger_1.LogSuccess)(`[SERVER ON]: Running in http://localhost:${port}/api`);
});
// * Control SERVER ERROR
server_1.default.on('error', (error) => {
    (0, logger_1.LogError)(`[SERVER ERROR]: ${error}`);
});
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
//# sourceMappingURL=index.js.map