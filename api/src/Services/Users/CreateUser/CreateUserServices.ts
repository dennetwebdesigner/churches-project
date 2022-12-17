import { CreateUserDTO } from './CreateUserDTO';
import { iuserRepository } from './../../../Repositories/iUserRepository';
export class CreateUserService{
    constructor(private repository: iuserRepository){
        this.repository = repository
    }

    async execute(data: CreateUserDTO ): Promise<any>{
        if(!data.password || !data.username){
            const err = JSON.stringify({status: 400, error: "Dados invalido"})
            throw new Error(err);            
        }

        this.repository.save(data)

        return true
    }
}