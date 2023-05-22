import { InvalidParamError } from '@data/erros';
import { badRequest, ok } from '@data/helpers';
import { IUsersRepository } from '@data/protocols';
import { IUpdateUser, IUpdateUserUseCase } from '@domain/usecases/user';
import { IHttpResponse } from '@presentation/protocols';

class UpdateUserUseCase implements IUpdateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: IUpdateUser.Params): Promise<IHttpResponse> {
    const user = await this.usersRepository.findByUserId(data.user_id);

    if (!user) {
      return badRequest(
        new InvalidParamError('User not already exists'),
        'O usuário ainda não existe!',
      );
    }

    const response = await this.usersRepository.updateUser(
      {
        cep: data.cep,
        address: data.address,
        address_number: data.address_number,
        email: data.email,
        phone_number: data.phone_number,
      },
      data.user_id,
    );

    return ok({ ...response, password: '*******' });
  }
}

export { UpdateUserUseCase };
