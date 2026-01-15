import { Sequelize } from 'sequelize-typescript';
import { Weapons } from '../enteties/militaryweapons.entety';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'test',
      });
      sequelize.addModels([Weapons]);
      await sequelize.sync();
      return sequelize;
    },
  },
];