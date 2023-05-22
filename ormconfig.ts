import { constants } from '@main/config';
import './src/infra/typeorm/entities/User';

const {
  db: { type, host, port, username, password, database },
} = constants;

export = {
  type,
  host,
  port,
  username,
  password,
  database,
  entities: ['./src/infra/typeorm/entities/*.ts'],
  migrations: ['./src/infra/database/migrations/*.ts'],
  cli: {
    entitiesDir: './src/infra/typeorm/entities',
    migrationsDir: './src/infra/database/migrations',
  },
};
