import { ICreateUser } from '@domain/usecases/user/ICreateUserUseCase';
import { createUserUseCaseFactory } from '@main/factories/usecases/user';
import { IController, IHttpRequest, IHttpResponse } from '../../protocols';

class CreateUserController implements IController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const createUserUseCase = createUserUseCaseFactory();

    const response = await createUserUseCase.execute(
      request.body as ICreateUser.Params,
    );

    return response;
  }
}

export { CreateUserController };
