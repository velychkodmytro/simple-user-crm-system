import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database/config/sequelize';
import UserModel from '../user/userModel';
class PostModel extends Model {}

PostModel.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
            validate: {
                len: {
                    args: [5, 255],
                    msg: 'Title must to be minimum 5 characters long',
                },
            },
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
            validate: {
                len: {
                    args: [5, 255],
                    msg: 'Text must to be minimum 5 characters long',
                },
            },
        },
        ownerId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        tableName: 'posts',
    }
);

export default PostModel;
