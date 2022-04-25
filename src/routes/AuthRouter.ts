import { IUser } from '../doamin/interfaces/IUser.interface'
import { AuthController } from '../controller/AuthController'
import express, { Request, Response } from 'express'
import { IAuth } from '../doamin/interfaces/IAuth.interface'

// BRYPT for password
import bcrypt from 'bcrypt'

// MiddleWare
// import { verifyToken } from '../middlewares/verifyToken.middlewares'

// BodyParser (Read JSON from BODY request)
import bodyParser from 'body-parser'

// MiddleWare to read JSON in BODY
const jsonParser = bodyParser.json()

const authRouter = express.Router()

authRouter.route('/register')
  .post(jsonParser, async (req: Request, res: Response) => {
    const { name, email, password, age } = req?.body
    let hashedPassword = ''

    if (name && password && email && age) {
      // Obtain the password in req and cypher
      // eslint-disable-next-line no-unused-vars
      hashedPassword = bcrypt.hashSync(password, 8)

      const newUser: IUser = {
        name,
        email,
        password,
        age
      }

      // Controller Instance to excute method
      const controller: AuthController = new AuthController()

      // Obtain Reponse 36
      const response: any = await controller.registerUser(newUser)

      // Send to the client the responsee
      return res.status(200).send(response)
    }
  })

authRouter.route('/login')
  .post(jsonParser, async (req: Request, res: Response) => {
    const { email, password } = req?.body

    if (email && password) {
      // Controller Instance to excute method
      const controller: AuthController = new AuthController()

      const auth: IAuth = {
        email,
        password
      }

      // Obtain Reponse 36
      const response: any = await controller.loginUser(auth)

      // Send to the client the responsee
      return res.status(200).send(response)
    }
  })

export default authRouter
