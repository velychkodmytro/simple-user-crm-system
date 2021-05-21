import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database/sequelize';

class FollowerModel extends Model {}

FollowerModel.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
        },
        targetId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM,
            values: ['pending', 'following', 'rejected'],
            allowNull: false,
            unique: false,
            validate: {
                len: {
                    args: [5, 255],
                    msg: 'Text must to be minimum 5 characters long',
                },
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        tableName: 'followers',
    }
);

export default FollowerModel;
