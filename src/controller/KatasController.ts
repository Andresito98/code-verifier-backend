import { Delete, Get, Post, Put, Query, Route, Tags } from 'tsoa'
import { IKatas } from './interfaces'
import { LogSuccess, LogWarning } from '../utils/logger'

import { getAllKatas, getKatasById, deleteKatasById, createKatas, updateKatasById } from '../doamin/orm/Katas.orm'

@Route('/api/katas')
@Tags('KatasController')
export class KatasController implements IKatas {
  /**
   * @param {string} id Id of katas
   * @returns All katas
   */
  @Get('/')
  public async getKatas (@Query()id?: String): Promise<any> {
    let response: any = ''

    if (id) {
      LogSuccess(`[/api/katas] Get katas By ID: ${id} `)
      response = await getKatasById(id)
    } else {
      LogSuccess('[/api/katas] Get All katas Request')
      response = await getAllKatas()
    }

    return response
  }

  /**
   * @param {string} id Id of katas
   * @returns message informing if deletion was correct
   */
   @Delete('/')
  public async deleteKatas (@Query()id?: String): Promise<any> {
    let response: any = ''

    if (id) {
      LogSuccess(`[/api/katas] Get Katas By ID: ${id} `)
      await deleteKatasById(id).then((r) => {
        response = {
          message: `Katas with id ${id} deleted successfully`
        }
      })
    } else {
      LogWarning('[/api/katas] Delete Katas Request WITHOUT ID')
      response = {
        message: 'plz, provide an ID to remove from db'
      }
    }

    return response
  }

   @Post('/')
   public async createKatas (katas: any): Promise<any> {
     let response: any = ''

     await createKatas(katas).then((r) => {
       LogSuccess(`[/api/katas] Create Katas: ${katas} `)
       response = {
         message: `Katas created: ${katas.name}`
       }
     })
     return response
   }

   @Put('/')
   public async updateKatas (@Query()id: String, katas:any): Promise<any> {
     let response: any = ''

     if (id) {
       LogSuccess(`[/api/katas] Update Katas By ID: ${id} `)
       await updateKatasById(id, katas).then((r) => {
         response = {
           message: `Katas with id ${id} updated successfully`
         }
       })
     } else {
       LogWarning('[/api/katas] Updated Katas Request WITHOUT ID')
       response = {
         message: 'plz, provide an ID to update and existing katas'
       }
     }

     return response
   }
} //
