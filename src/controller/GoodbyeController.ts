import { ResponseMDate } from './types'
import { IGoodbyeController } from './interfaces'
import { LogSuccess } from '../utils/logger'

const date: Date = new Date()

export class GoodbyeController implements IGoodbyeController {
  public async getMessDate (name?: string): Promise<ResponseMDate> {
    LogSuccess('[/api/goodbye] Get Request')

    return {
      message: `Goodbye , ${name || ' un placer!'}`,
      Date: date
    }
  }
}
