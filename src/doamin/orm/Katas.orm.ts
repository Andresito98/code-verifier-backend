import { LogError } from '../../utils/logger'
import { katasEntity } from '../entities/Katas.entity'

// CRUD

/**
 * Method to obtain all Katas from Collection "Katas" in Mongo Server
 */

export const getAllKatas = async (): Promise<any[] | undefined> => {
  try {
    const katasModel = katasEntity()

    return await katasModel.find({ isDelete: false })
  } catch (error) {
    LogError(`[ORM ERROR]: Getting All Katas: ${error}`)
  }
}

export const getKatasById = async (id: String) : Promise<any | undefined> => {
  try {
    const katasModel = katasEntity()

    return await katasModel.findById(id)
  } catch (error) {
    LogError(`[ORM ERROR]: Getting Katas By ID: ${error}`)
  }
}

// Delete Katas By ID

export const deleteKatasById = async (id: String): Promise<any | undefined> => {
  try {
    const katasModel = katasEntity()

    return await katasModel.deleteOne({ _id: id })
  } catch (error) {
    LogError(`[ORM ERROR]: Deleting Katas by ID: ${error}`)
  }
}

// Create New Katas
export const createKatas = async (katas: any): Promise<any | undefined> => {
  try {
    const katasModel = katasEntity()

    // Create / Isert
    return await katasModel.create(katas)
  } catch (error) {
    LogError(`[ORM ERROR]: Deleting Katas by ID: ${error}`)
  }
}

// Update New Katas
export const updateKatasById = async (id: String, katas: any): Promise<any | undefined> => {
  try {
    const katasModel = katasEntity()

    // Update / Katas
    return await katasModel.findByIdAndUpdate(id, katas)
  } catch (error) {
    LogError(`[ORM ERROR]: Updating Katas ${id}: ${error}`)
  }
}
