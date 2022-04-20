import { Get, Query, Route, Tags } from 'tsoa'
import { ResponseMDate } from './types'
import { IGoodbyeController } from './interfaces'
import { LogSuccess } from '../utils/logger'

const date: Date = new Date()

@Route('/api/goodbye')
@Tags('GoodbyeController')
export class GoodbyeController implements IGoodbyeController {
  /**
  * Endpoint to retreive a Message "Adios {name}" in JSON
  * @param { string | undefined } name Name of user to be greeted
  * @param { Date } date fecha del dia actual
  * @returns { ResponseMDate } Promise of ResponseMDate
  */
   @Get('/')
  public async getMessDate (@Query()name?: string): Promise<ResponseMDate> {
    LogSuccess('[/api/goodbye] Get Request')

    return {
      message: `Goodbye , ${name || ' un placer!'}`,
      Date: date
    }
  }
}
