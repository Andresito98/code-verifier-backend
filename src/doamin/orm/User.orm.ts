import { userEntity } from '../entities/User.entity'
// import { LogError } from '@/utils/logger'
import { LogError } from '../../utils/logger'

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
