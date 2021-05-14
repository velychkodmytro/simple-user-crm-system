import { Sequelize } from 'sequelize';
import config from 'config';

const sequelize: Sequelize = new Sequelize(
    config.get<string>('myDatabase.database'),
    config.get<string>('myDatabase.username'),
    config.get<string>('myDatabase.password'),
    {
        host: config.get<string>('myDatabase.host'),
        dialect: config.get('myDatabase.dialect'),
        port: config.get<number>('myDatabase.PORT'),
    }
);

export default sequelize;
