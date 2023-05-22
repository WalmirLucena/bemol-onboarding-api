import { CreateUserUseCase } from '@data/usecases/user';
import { hashAdaptersFactory } from '@main/factories/adapters';
import { usersRepositoryFactory } from '@main/factories/repositories';

function createUserUseCaseFactory(): CreateUserUseCase {
  return new CreateUserUseCase(usersRepositoryFactory(), hashAdaptersFactory());
}

export { createUserUseCaseFactory };
