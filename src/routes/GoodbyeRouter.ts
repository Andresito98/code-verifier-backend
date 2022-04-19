import express, { Request, Response } from 'express'
import { GoodbyeController } from '../controller/GoodbyeController'
import { LogInfo } from '../utils/logger'

// Router from express
const goodbyeRouter = express.Router()

// http://localhost:8000/api/goodbye?name=Andres/
goodbyeRouter.route('/')
// GET:
  .get(async (req: Request, res: Response) => {
    // Obtain a Query Param
    const name: any = req?.query?.name
    LogInfo(`Query Param: ${name}`)
    // Controller Instance to excute method
    const controller: GoodbyeController = new GoodbyeController()
    // Obtain Reponse
    const response = await controller.getMessDate(name)
    // Send to the client the response
    return res.send(response)
  })

export default goodbyeRouter
