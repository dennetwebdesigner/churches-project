import { UserRepository } from "../../../Repositories/implamentations/UserRepository"; 
import { CreateUserService } from "./CreateUserServices";
import { CreateUserController } from "./CreateUserController";

const userRepository = new UserRepository()
const createUserService = new CreateUserService(userRepository)
const createUserController = new CreateUserController(createUserService)

export {createUserController}