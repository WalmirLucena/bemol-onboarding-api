import { UserModel } from '@domain/models';
import { IHttpResponse } from '@presentation/protocols';

interface IUpdateUserUseCase {
  execute(data: IUpdateUser.Params): Promise<IHttpResponse>;
}

interface IUpdateUser extends IHttpResponse {
  body: IUpdateUser.Result;
}

namespace IUpdateUser {
  export type Params = {
    user_id: number;
    email?: string;
    phone_number?: string;
    cep?: string;
    address?: string;
    address_number?: string;
  };

  export type Result = {
    data: UserModel;
  };
}

export { IUpdateUserUseCase, IUpdateUser };
