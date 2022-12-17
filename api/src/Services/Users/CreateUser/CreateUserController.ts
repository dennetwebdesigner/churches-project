import { Request, Response } from 'express';
import { CreateUserDTO } from './CreateUserDTO';
import { CreateUserService } from './CreateUserServices';

export class CreateUserController {
  constructor(private service: CreateUserService) {
    this.service = service;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const data= req.body;

    try {
      this.service.execute(data);
      return res.status(200).json({});
    } catch (error: any) {
      const err = JSON.parse(error.message);
      return res.status(err.status).json(err.message);
    }
  }
}
