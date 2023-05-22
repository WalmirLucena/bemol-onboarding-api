import { InvalidParamError } from '@data/erros';
import { badRequest, created } from '@data/helpers';
import { IHashProvider, IUsersRepository } from '@data/protocols';
import { ProtectedUserModel } from '@domain/models';
import {
  ICreateUser,
  ICreateUserUseCase,
} from '@domain/usecases/user/ICreateUserUseCase';

class CreateUserUseCase implements ICreateUserUseCase {
  constructor(
    private userReposity: IUsersRepository,
    private hashProvider: IHashProvider,
  ) {}

  async execute({
    email,
    password,
    address_number,
    address,
    birthdate,
    cep,
    city,
    cpf,
    name,
    phone_number,
    state,
  }: ICreateUser.Params): Promise<ICreateUser> {
    const userExists = await this.userReposity.findByMail(email);
    if (userExists) {
      return badRequest(new InvalidParamError('User already exists'));
    }

    const hashPassword = await this.hashProvider.hash(password);

    const result = await this.userReposity.store({
      email,
      password: hashPassword,
      address,
      address_number,
      birthdate,
      cep,
      city,
      cpf,
      name,
      phone_number,
      state,
    });

    return created({ ...result, password: '******' });
  }
}

export { CreateUserUseCase };
