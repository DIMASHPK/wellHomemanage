import { Sequelize } from 'sequelize';

const {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_LOGGING_ENABLED,
} = process.env;

export const sequelize = new Sequelize({
  database: POSTGRES_DB,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  host: POSTGRES_HOST,
  dialect: 'postgres',
  storage: ':memory',
  logging: POSTGRES_LOGGING_ENABLED === 'true',
});
