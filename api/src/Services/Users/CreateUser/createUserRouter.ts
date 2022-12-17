import { Router, Request, Response } from "express"
import { createUserController } from "."

const createUserRouter = Router()

createUserRouter.post('/', async (req: Request, res: Response): Promise<Response> => {
    return createUserController.handle(req, res);
})

createUserRouter.get('/', async (req: Request, res: Response): Promise<Response> => {
    return createUserController.handle(req, res);
})


export  {createUserRouter}