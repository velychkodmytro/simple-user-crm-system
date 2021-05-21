import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database/sequelize';
import PostModel from '../post/postModel';
import FollowerModel from '../follower/followerModel';

class UserModel extends Model {}

UserModel.init(
    {
        id: {
            type: DataTypes.UUID,
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
            // validate: {
            //     isAge: {
            //         msg: 'Age is not correct',
            //     },
            // },
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
        tableName: 'user',
    }
);

UserModel.hasMany(PostModel, {
    onDelete: 'cascade',
    foreignKey: 'ownerId',
});
PostModel.belongsTo(UserModel, {
    onDelete: 'cascade',
    foreignKey: 'ownerId',
    as: 'author',
});
UserModel.hasMany(FollowerModel, {
    onDelete: 'cascade',
    foreignKey: 'targetId',
});
UserModel.hasMany(FollowerModel, {
    onDelete: 'cascade',
    foreignKey: 'followerId',
});

export default UserModel;
