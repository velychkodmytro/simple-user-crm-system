import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database/sequelize';
import PostModel from '../post/postModel';
import FollowerModel from '../follower/followerModel';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class UserModel extends Model {
    password: string;

    static generateAuthToken = async (userId: string): Promise<string> => {
        try {
            const token = jwt.sign({ id: userId }, 'thisismynewtoken', {
                expiresIn: '60 min',
            });
            console.log(token);
            return token;
        } catch (error) {
            console.log(error);
        }
    };

    static findByCredentials = async (email: string, password: string) => {
        const user = await UserModel.findOne({ where: { email } });
        if (!user) {
            throw new Error('Wrong email');
        }
        console.log(user);
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Wrong password');
        }
        console.log(user);
        return user;
    };
}

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
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    msg: 'The email must be a valid email',
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
        hooks: {
            beforeCreate: async (user) => {
                const salt = await bcrypt.genSalt(10);
                console.log(user);
                user.password = await bcrypt.hash(user.password, salt);
            },
        },
        sequelize,
        timestamps: false,
        tableName: 'users',
    }
);

UserModel.hasMany(PostModel, {
    onDelete: 'cascade',
    foreignKey: 'ownerId',
});
UserModel.hasMany(FollowerModel, {
    onDelete: 'cascade',
    foreignKey: 'targetId',
});
UserModel.hasMany(FollowerModel, {
    onDelete: 'cascade',
    foreignKey: 'followerId',
});

PostModel.belongsTo(UserModel, {
    onDelete: 'cascade',
    foreignKey: 'ownerId',
    as: 'author',
});

export default UserModel;
