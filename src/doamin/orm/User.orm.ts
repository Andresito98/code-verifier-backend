import { userEntity } from '../entities/User.entity'
// import { LogError } from '@/utils/logger'
import { LogError } from '../../utils/logger'
import { IUser } from '../interfaces/IUser.interface'
import { IAuth } from '../interfaces/IAuth.interface'
// BRYPT for passwords
import bcrypt from 'bcrypt'
// JWT
import jwt from 'jsonwebtoken'

// CRUD

/**
 * Method to obtain all Users from Collection "Users" in Mongo Server
 */

export const getAllUsers = async (): Promise<any[] | undefined> => {
  try {
    const userModel = userEntity()

    return await userModel.find({ isDelete: false })
  } catch (error) {
    LogError(`[ORM ERROR]: Getting All Users: ${error}`)
  }
}

export const getUserById = async (id: String) : Promise<any | undefined> => {
  try {
    const userModel = userEntity()

    return await userModel.findById(id)
  } catch (error) {
    LogError(`[ORM ERROR]: Getting Users By ID: ${error}`)
  }
}

// Delete User By ID

export const deleteUserById = async (id: String): Promise<any | undefined> => {
  try {
    const userModel = userEntity()

    return await userModel.deleteOne({ _id: id })
  } catch (error) {
    LogError(`[ORM ERROR]: Deleting Users by ID: ${error}`)
  }
}

// Create New User
export const createUser = async (user: any): Promise<any | undefined> => {
  try {
    const userModel = userEntity()

    // Create / Isert
    return await userModel.create(user)
  } catch (error) {
    LogError(`[ORM ERROR]: Deleting Users by ID: ${error}`)
  }
}

// Update New User
export const updateUserById = async (id: String, user: any): Promise<any | undefined> => {
  try {
    const userModel = userEntity()

    // Update / User
    return await userModel.findByIdAndUpdate(id, user)
  } catch (error) {
    LogError(`[ORM ERROR]: Updating Users ${id}: ${error}`)
  }
}

// Register User
export const registerUser = async (user: IUser): Promise<any | undefined> => {
  try {
    const userModel = userEntity()
    // Create / User
    return await userModel.create(user)
  } catch (error) {
    LogError(`[ORM ERROR]: Creatin Users : ${error}`)
  }
}

// Login User
export const loginUser = async (auth: IAuth): Promise<any | undefined> => {
  try {
    const userModel = userEntity()

    // Find User by email
    userModel.findOne({ email: auth.email }, (err: any, user: IUser) => {
      if (err) {
        // TODO: return ERROR --> (500)
      }

      if (!user) {
        // TODO: return ERROR --> (404)
      }

      // Use bcrypt to compare pass
      const validPassword = bcrypt.compareSync(auth.password, user.password)

      if (!validPassword) {
        // TODO: not authorised --> (401)
      }

      // Create JWT
      // TODO: secret must be in .env
      const token = jwt.sign({ email: user.email }, 'MYSECRETWORD', {
        expiresIn: '2h'
      })

      return token
    })
  } catch (error) {
    LogError(`[ORM ERROR]: Getting Users By ID: ${error}`)
  }
}

// Logout User
export const logoutUser = async (): Promise<any | undefined> => {

}
