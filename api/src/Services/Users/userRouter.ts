import { Router } from 'express';
import { createUserRouter } from './CreateUser/createUserRouter';
const userRouter = Router();

userRouter.use('/', createUserRouter);

export { userRouter };
