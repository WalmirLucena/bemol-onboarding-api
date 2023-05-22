import { InvalidParamError } from '@data/erros';
import { badRequest, created } from '@data/helpers';
import {
  IHashProvider,
  ITokenProvider,
  IUsersRepository,
} from '@data/protocols';
import { UserModel } from '@domain/models';
import { ILogin, ILoginUserUseCase } from '@domain/usecases/auth';
import { constants } from '@main/config';

class LoginUserUseCase implements ILoginUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private hashProvider: IHashProvider,
    private jwtProvider: ITokenProvider,
  ) {}

  async execute({ email, password }: ILogin.Params): Promise<ILogin> {
    const userExists: UserModel = await this.usersRepository.findByMail(email);
    if (!userExists) {
      return badRequest(new InvalidParamError('Email or password incorrect'));
    }

    const passwordAuthenticate = await this.hashProvider.compare(
      password,
      userExists.password,
    );
    if (!passwordAuthenticate) {
      return badRequest(new InvalidParamError('Email or password incorrect'));
    }

    const token = this.jwtProvider.generateToken(
      constants.secret,
      constants.expiresIn,
      {
        user_id: userExists.id,
      },
    );
    return created(token);
  }
}
export { LoginUserUseCase };
