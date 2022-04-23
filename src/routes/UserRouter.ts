// import { LogInfo } from '@/utils/logger'
import { LogInfo } from '../utils/logger'
import express, { Request, Response } from 'express'
import { UserController } from '../controller/UsersController'

// Router from express
const usersRouter = express.Router()

// http://localhost:8000/api/users?id=23423523f23rdwa
usersRouter.route('/')
// GET:
  .get(async (req: Request, res: Response) => {
    // Obtain a Query Param
    const id: any = req?.query?.id
    LogInfo(`Query Param: ${id}`)
    // Controller Instance to excute method
    const controller: UserController = new UserController()
    // Obtain Reponse
    const response = await controller.getUsers(id)
    // Send to the client the response
    return res.send(response)
  })

  // Delete
  .delete(async (req: Request, res: Response) => {
    // Obtain a Query Param
    const id: any = req?.query?.id
    LogInfo(`Query Param: ${id}`)
    // Controller Instance to excute method
    const controller: UserController = new UserController()
    // Obtain Reponse
    const response: any = await controller.deleteUser(id)
    // Send to the client the responsee
    return res.send(response)
  })

  // Post
  .post(async (req: Request, res: Response) => {
    const age: any = req?.query?.age
    const email: any = req?.query?.email
    const name: any = req?.query?.name

    // Controller Instance to excute method
    const controller: UserController = new UserController()

    const user = {
      age: age || 25,
      email: email || 'dsdss@juan.com',
      name: name || 'Andres'
    }
    // Obtain Reponse
    const response: any = await controller.createUser(user)
    // Send to the client the responsee
    return res.send(response)
  })

  .put(async (req: Request, res: Response) => {
    // Obtain a Query Param
    const id: any = req?.query?.id
    const age: any = req?.query?.age
    const email: any = req?.query?.email
    const name: any = req?.query?.name
    LogInfo(`Query Param: ${id}, ${age}, ${email}, ${name}`)

    // Controller Instance to excute method
    const controller: UserController = new UserController()

    const user = {
      age: age || 25,
      email: email || 'dsdss@juan.com',
      name: name || 'Andres'
    }
    // Obtain Reponse
    const response: any = await controller.updateUser(id, user)
    // Send to the client the responsee
    return res.send(response)
  })

// Export Hello Router
export default usersRouter
