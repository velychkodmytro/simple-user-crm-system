import { Sequelize } from 'sequelize';
import config from 'config';

const sequelize: Sequelize = new Sequelize(
    config.get<string>('development.database'),
    config.get<string>('development.username'),
    config.get<string>('development.password'),
    {
        host: config.get<string>('development.host'),
        dialect: config.get('development.dialect'),
        port: config.get<number>('development.port'),
    }
);

export default sequelize;
