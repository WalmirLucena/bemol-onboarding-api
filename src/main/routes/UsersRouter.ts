import ServerTypes from '@data/protocols/server/IServerAdapter';
import { routerExpressAdapter } from '@main/adapters';
import {
  createUserControllerFactory,
  getUserControllerFactory,
  listUserControllerFactory,
  updateUserControllerFactory,
} from '@main/factories/controllers/user';

export default (router: ServerTypes.RouterAdapter): void => {
  router.post('/user', routerExpressAdapter(createUserControllerFactory()));
  router.get('/user', routerExpressAdapter(getUserControllerFactory()));
  router.get('/users', routerExpressAdapter(listUserControllerFactory()));
  router.put('/user', routerExpressAdapter(updateUserControllerFactory()));
};
