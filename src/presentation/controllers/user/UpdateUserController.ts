import { IUpdateUser } from '@domain/usecases/user';
import { updateUserUseCaseFactory } from '@main/factories/usecases/user';
import {
  IController,
  IHttpRequest,
  IHttpResponse,
} from '@presentation/protocols';

class UpdateUserController implements IController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const updateUserUseCase = updateUserUseCaseFactory();

    const params = {
      ...request.query,
      ...request.body,
    };

    const response = await updateUserUseCase.execute(
      params as IUpdateUser.Params,
    );

    return response;
  }
}

export { UpdateUserController };
