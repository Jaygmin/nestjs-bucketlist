import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

const config = {
  type: 'postgres',
  host: `${process.env.DB_HOST || 'localhost'}`,
  port: Number(`${process.env.DB_PORT || '5432'}`),
  username: `${process.env.DB_USERNAME || 'test'}`,
  password: `${process.env.DB_PASSWORD || 'test'}`,
  database: `${process.env.DB_DATABASE || 'bucketlist'}`,
  entities: ['dist/**/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],

  // only for development
  synchronize: true,
};

export default registerAs('typeorm', () => config);

// for TypeORM CLI
export const connectionSource = new DataSource(config as DataSourceOptions);
