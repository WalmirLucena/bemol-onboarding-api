import { ProtectedUserModel } from '@domain/models';
import { IHttpResponse } from '@presentation/protocols';

interface ICreateUserUseCase {
  execute(user: ICreateUser.Params): Promise<IHttpResponse>;
}

interface ICreateUser extends IHttpResponse {
  body: ICreateUser.Result;
}

namespace ICreateUser {
  export type Params = {
    email: string;
    password: string;
    name: string;
    birthdate: Date;
    phone_number: string;
    city: string;
    cpf: string;
    state: string;
    cep: string;
    address: string;
    address_number: string;
  };

  export type Result = {
    user: ProtectedUserModel;
  };
}

export { ICreateUserUseCase, ICreateUser };
