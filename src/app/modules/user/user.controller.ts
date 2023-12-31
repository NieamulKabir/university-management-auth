import { Request, Response } from 'express';
import { UserService } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;
    const result = await UserService.createUser(user);
    res.status(200).json({
      success: true,
      message: 'User Create Successfully',
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'failed to create user',
    });
  }
};

export const UserController = {
  createUser,
};
