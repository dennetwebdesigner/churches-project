import { CreateUserDTO } from "../../Services/Users/CreateUser/CreateUserDTO";
import { iuserRepository } from "../iUserRepository";

const DATABASE: CreateUserDTO[] = []

export class UserRepository implements iuserRepository{
    async save(data: CreateUserDTO): Promise<void> {
        DATABASE.push(data)
    }

    async getData(): Promise<CreateUserDTO[]> {
        return DATABASE;
    }
}

