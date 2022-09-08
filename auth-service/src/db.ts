import { DataSource } from 'typeorm';
import { join } from 'path';
import { Token } from './Models/token.entetie';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const AuthDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: ['./Models/*.ts'],
  migrations: [join(__dirname, '/migration/*.{ts,js}')],
  synchronize: false,
});

AuthDataSource.initialize()
  .then(() => console.log('DB successfully initialized'))
  .catch((error: Error) => console.log('Could not connect', error));

export default AuthDataSource;
