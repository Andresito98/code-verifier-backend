// import { LogInfo } from '@/utils/logger'
import { LogInfo } from '../utils/logger'
import express, { Request, Response } from 'express'
import { KatasController } from '../controller/KatasController'

// Router from express
const katasRouter = express.Router()

// http://localhost:8000/api/katas?id=23423523f23rdwa
katasRouter.route('/')
// GET:
  .get(async (req: Request, res: Response) => {
    // Obtain a Query Param
    const id: any = req?.query?.id
    LogInfo(`Query Param: ${id}`)
    // Controller Instance to excute method
    const controller: KatasController = new KatasController()
    // Obtain Reponse
    const response = await controller.getKatas(id)
    // Send to the client the response
    return res.send(response)
  })

  // Delete
  .delete(async (req: Request, res: Response) => {
    // Obtain a Query Param
    const id: any = req?.query?.id
    LogInfo(`Query Param: ${id}`)
    // Controller Instance to excute method
    const controller: KatasController = new KatasController()
    // Obtain Reponse
    const response: any = await controller.deleteKatas(id)
    // Send to the client the responsee
    return res.send(response)
  })

  // Post
  .post(async (req: Request, res: Response) => {
    const name: any = req?.query?.name
    const description: any = req?.query?.description
    const level: any = req?.query?.level
    const intents: any = req?.query?.intents
    const stars: any = req?.query?.stars
    const creator: any = req?.query?.creator
    const solution: any = req?.query?.solution
    const participants: any = req?.query?.participants

    // Controller Instance to excute method
    const controller: KatasController = new KatasController()

    const katas = {
      name: name || 'Andres',
      description: description || 'Description default',
      level: level || 'Level 1',
      intents: intents || 10,
      stars: stars || 1,
      creator: creator || 'TuWinyDePo',
      solution: solution || 'solution default',
      participants: participants || []
    }
    // Obtain Reponse
    const response: any = await controller.createKatas(katas)
    // Send to the client the responsee
    return res.send(response)
  })

  .put(async (req: Request, res: Response) => {
    // Obtain a Query Param
    const id: any = req?.query?.id
    const name: any = req?.query?.name
    const description: any = req?.query?.description
    const level: any = req?.query?.level
    const intents: any = req?.query?.intents
    const stars: any = req?.query?.stars
    const creator: any = req?.query?.creator
    const solution: any = req?.query?.solution
    const participants: any = req?.query?.participants
    LogInfo(`Query Param: ${id}, ${name}, ${description}, ${level}, ${intents}, ${stars}, ${creator}, ${solution}, ${participants}`)

    // Controller Instance to excute method
    const controller: KatasController = new KatasController()

    const katas = {
      name: name || 'Andres',
      description: description || 'Description default',
      level: level || 'Level 1',
      intents: intents || 10,
      stars: stars || 1,
      creator: creator || 'TuWinyDePo',
      solution: solution || 'solution default',
      participants: participants || []
    }
    // Obtain Reponse
    const response: any = await controller.updateKatas(id, katas)
    // Send to the client the responsee
    return res.send(response)
  })

// Export Hello Router
export default katasRouter
