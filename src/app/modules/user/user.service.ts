import { User } from './user.model';
import { IUser } from './user.interface';
import config from '../../../config/index';
import { generateUserId } from './user.utils';

const createUser = async (user: IUser): Promise<IUser | null> => {
  //auto generate incremental id
  const id = await generateUserId();
  user.id = id;

  //default password
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }
  const createdUser = await User.create(user);

  if (!createdUser) {
    throw new Error('Failed to create user');
  }
  return createdUser;
};

export const UserService = {
  createUser,
};
