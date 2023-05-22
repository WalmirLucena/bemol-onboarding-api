import { ProtectedUserModel, UserModel } from '@domain/models';
import { ICreateUser } from '@domain/usecases/user/ICreateUserUseCase';

type IUpdateUser = {
  email?: string;
  phone_number?: string;
  cep?: string;
  address?: string;
  address_number?: string;
};

interface IUsersRepository {
  store(user: ICreateUser.Params): Promise<UserModel>;
  findByMail(email: string): Promise<UserModel>;
  findByUserId(user_id: number): Promise<UserModel>;
  listUsers(): Promise<ProtectedUserModel[]>;
  updateUser(data: IUpdateUser, user_id: number): Promise<UserModel>;
}

export { IUsersRepository, IUpdateUser };
