import { Delete, Get, Post, Put, Query, Route, Tags } from 'tsoa'
import { IUserController } from './interfaces'
import { LogSuccess, LogWarning } from '../utils/logger'

// ORM - Users Collection
import { createUser, deleteUserById, getAllUsers, getUserById, updateUserById } from '../doamin/orm/User.orm'

@Route('/api/users')
@Tags('UserController')
export class UserController implements IUserController {
  /**
   * @param {string} id Id of user
   * @returns All users
   */
  @Get('/')
  public async getUsers (@Query()id?: String): Promise<any> {
    let response: any = ''

    if (id) {
      LogSuccess(`[/api/users] Get User By ID: ${id} `)
      response = await getUserById(id)
    } else {
      LogSuccess('[/api/users] Get All Users Request')
      response = await getAllUsers()
    }

    return response
  }

  /**
   * @param {string} id Id of user
   * @returns message informing if deletion was correct
   */
  @Delete('/')
  public async deleteUser (@Query()id?: String): Promise<any> {
    let response: any = ''

    if (id) {
      LogSuccess(`[/api/users] Get User By ID: ${id} `)
      await deleteUserById(id).then((r) => {
        response = {
          message: `User with id ${id} deleted successfully`
        }
      })
    } else {
      LogWarning('[/api/users] Delete User Request WITHOUT ID')
      response = {
        message: 'plz, provide an ID to remove from db'
      }
    }

    return response
  }

  @Post('/')
  public async createUser (user: any): Promise<any> {
    let response: any = ''

    await createUser(user).then((r) => {
      LogSuccess(`[/api/users] Create User: ${user} `)
      response = {
        message: `User created: ${user.name}`
      }
    })
    return response
  }

  @Put('/')
  public async updateUser (@Query()id: String, user:any): Promise<any> {
    let response: any = ''

    if (id) {
      LogSuccess(`[/api/users] Update User By ID: ${id} `)
      await updateUserById(id, user).then((r) => {
        response = {
          message: `User with id ${id} updated successfully`
        }
      })
    } else {
      LogWarning('[/api/users] Updated User Request WITHOUT ID')
      response = {
        message: 'plz, provide an ID to update and existing user'
      }
    }

    return response
  }

  // public async getUserById (@Query()id?: String): Promise<BasicResponse> {
  //   LogSuccess(`[/api/users/] Get Users By ID: ${id}`)

  //   return {
  //     message: `Obtaining User with ID: ${id}`
  //   }
  // }
}
