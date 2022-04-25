import { IUser } from '../../doamin/interfaces/IUser.interface'
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

export interface IKatas{
    // Read all katas from db or get katas by id
    getKatas(id: String): Promise<any>
    // Delet Katas by ID
    deleteKatas(id: String): Promise<any>
    // Create new Katas
    createKatas(katas: any): Promise<any>
    // Update Katas
    updateKatas(id: String, katas: any): Promise<any>
}

export interface IAuthController {
    // regisster new User
    registerUser(user: IUser): Promise<any>
    // login user
    loginUser(auth: any): Promise<any>
}
