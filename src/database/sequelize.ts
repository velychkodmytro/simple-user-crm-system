import { Sequelize } from 'sequelize';
import config from 'config';

const sequelize: Sequelize = new Sequelize(
    config.get<string>('database.database'),
    config.get<string>('database.username'),
    config.get<string>('database.password'),
    {
        host: config.get<string>('database.host'),
        dialect: config.get('database.dialect'),
        port: config.get<number>('database.port'),
    }
);

export default sequelize;
