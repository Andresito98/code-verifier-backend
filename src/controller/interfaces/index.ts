import { BasicResponse, ResponseMDate } from '../types'

export interface IHelloController {
    getMessage(name?:string): Promise<BasicResponse>
}

/* Ejercicio 2 aqui faltaria la fecha */
export interface IGoodbyeController {
    getMessDate(name?:string): Promise<ResponseMDate>
}
