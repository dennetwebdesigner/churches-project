import {CreateUserDTO} from '../Services/Users/CreateUser/CreateUserDTO'

export interface iuserRepository{
    save(data: CreateUserDTO): Promise<void>
    getData(): Promise<CreateUserDTO[]>
}