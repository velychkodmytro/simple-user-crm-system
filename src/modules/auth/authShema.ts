import { Document, Model, model, Types, Schema, Query } from 'mongoose';
import jwt from 'jsonwebtoken';
import UserModel from '../user/userModel';
import bcrypt from 'bcryptjs';

const SessionSchema = new Schema({
    refreshToken: {
        type: String,
        required: true,
        default: '',
    },
    accessToken: {
        type: String,
        required: true,
        default: '',
    },
    userId: {
        type: String,
        required: true,
        default: '',
    },
});

SessionSchema.methods.generateAuthToken = (userId: string): string => {
    const token = jwt.sign({ _id: userId }, 'thisismynewtoken', {
        expiresIn: '15 min',
    });

    return token;
};

SessionSchema.statics.findByCredentials = async (
    email: string,
    password: string
) => {
    const user = await UserModel.findOne({ where: { email } });
    if (!user) {
        throw new Error('Wrong email');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Wrong password');
    }
    return user;
};

export default SessionSchema;
