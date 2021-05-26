import sequelize from './sequelize';
import mongoConnect from './mongoose';

export default {
    ...sequelize,
    mongoConnect,
};
