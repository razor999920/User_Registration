import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root999920',
  database: 'NestJS_User',
  entities: ['dist/src/users/entities/**/*.entity.js'],
  synchronize: true,
  // migrations: ['dist/src/db/migrations/*.js'],
  // cli: {
  //   migrationsDir: 'src/db/migrations',
  // },
};

export default config;
