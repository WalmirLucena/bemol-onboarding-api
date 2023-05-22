import { MissingParamError } from '@data/erros';
import { badRequest } from '@data/helpers';
import { IEnsureAuthenticated } from '@main/middlewares/protocols';
import ServerTypes from '../../../data/protocols/server/IServerAdapter';

const authenticatedMiddlewaresAdapter = (
  ensureAuthenticated: IEnsureAuthenticated,
) => {
  return async (
    request: ServerTypes.RequestAdapter,
    response: ServerTypes.ResponseAdapter,
    next: ServerTypes.NextFunctionAdapter,
  ): Promise<void> => {
    const authtoken = request.headers.authorization;
    const sizeToken = 152;

    if (!authtoken || authtoken.length < sizeToken) {
      const { statusCode, body } = badRequest(
        new MissingParamError('MissingToken'),
      );

      response.status(statusCode).json(body);
    }

    const [, token] = authtoken.split(' ');
    const { statusCode, body } = ensureAuthenticated.execute(token);

    if (statusCode >= 200 && statusCode <= 299) {
      request.payload = {
        user_id: body,
      };
    } else {
      response.status(statusCode).json({
        error: body,
      });
    }
    return next();
  };
};

export { authenticatedMiddlewaresAdapter };
