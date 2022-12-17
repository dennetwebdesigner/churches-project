import { Router, Request, Response } from "express"
import { userRouter } from "../Services/Users/userRouter"
const router = Router()

router.use('/user', userRouter)

export default router