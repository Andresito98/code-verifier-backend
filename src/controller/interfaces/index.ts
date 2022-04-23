import { BasicResponse, ResponseMDate } from '../types'

export interface IHelloController {
    getMessage(name?:string): Promise<BasicResponse>
}

/* Ejercicio 2 aqui faltaria la fecha */
export interface IGoodbyeController {
    getMessDate(name?:string): Promise<ResponseMDate>
}

export interface IUserController {
    // Read all users from db or get users by id
    getUsers(id: String): Promise<any>
    // Delet User by ID
    deleteUser(id: String): Promise<any>
    // Create new User
    createUser(user: any): Promise<any>
    // Update User
    updateUser(id: String, user: any): Promise<any>
}
