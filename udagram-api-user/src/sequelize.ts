import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  port: 5432,
  dialect: 'postgres',
  host: config.host,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false 
    }
  }
});

