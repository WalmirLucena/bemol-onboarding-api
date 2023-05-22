import { IHttpResponse } from '@presentation/protocols';

interface ILoginUserUseCase {
  execute(data: ILogin.Params): Promise<ILogin>;
}

interface ILogin extends IHttpResponse {
  body: ILogin.Result;
}
namespace ILogin {
  export type Params = {
    email: string;
    password: string;
  };

  export type Result = {
    body: {
      token: string;
    };
  };
}

export { ILoginUserUseCase, ILogin };
