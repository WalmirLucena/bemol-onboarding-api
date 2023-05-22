import { config } from 'dotenv';

config({
  path: process.env.NODE_ENV === 'localhost' ? '.env.localhost' : '.env.dev',
});

const {
  TYPE,
  PORT,
  HOST,
  PORTBD,
  USERNAMEDB,
  PWDDB,
  DATABASE,
  SECRET,
  EXPIRESIN,
} = process.env;

const constants = {
  port: PORT,
  secret: SECRET,
  expiresIn: EXPIRESIN,
  db: {
    type: TYPE,
    host: HOST,
    port: PORTBD,
    username: USERNAMEDB,
    password: PWDDB,
    database: DATABASE,
  },
};

export { constants };
