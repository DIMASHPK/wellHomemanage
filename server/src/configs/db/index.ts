import { Sequelize } from 'sequelize';

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DATABASE, DB_LOGGING_ENABLED } =
  process.env;

export const sequelize = new Sequelize({
  database: DB_DATABASE,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  host: DB_HOST,
  dialect: 'postgres',
  storage: ':memory',
  logging: DB_LOGGING_ENABLED === 'true',
});
