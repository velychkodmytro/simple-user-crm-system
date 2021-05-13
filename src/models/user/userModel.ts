import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database/sequelize';
import PostModel from '../post/postModel';
import FollowerModel from '../follower/followerModel';

class UserModel extends Model {}

UserModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: {
                    msg: 'The username can only contain letters',
                },
                len: {
                    args: [2, 255],
                    msg: 'The name must contains more then 2 characters',
                },
            },
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isAge: {
                    msg: 'Age is not correct',
                },
                isNumeric: {
                    msg: 'Age can be only the integer',
                },
            },
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    msg: 'Check and write your email correctly, please',
                },
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [6, 255],
                    msg: 'Password must have length minimum 6 characters',
                },
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        tableName: 'users',
    }
);

UserModel.hasMany(PostModel, { onDelete: 'cascade', foreignKey: 'ownerId' });
UserModel.hasMany(FollowerModel, { onDelete: 'cascade', foreignKey: 'userId' });
export default UserModel;
