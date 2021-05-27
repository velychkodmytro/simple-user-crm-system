import { v4 as uuid } from 'uuid';
import UserModel from './userModel';
import SessionSchema from '../auth/authShema';

export default class UserService {
    static async userCreate(
        userData: UserModel
    ): Promise<Record<string, UserModel | string>> {
        try {
            const id = uuid();
            const user = await UserModel.create({ id, ...userData });
            const token = await UserModel.generateAuthToken((user as any).id);
            return { user, token };
        } catch (error) {
            console.log(error);
        }
    }

    static async userSignIn(
        email: string,
        password: string
    ): Promise<Record<string, UserModel | string>> {
        try {
            const user = await UserModel.findByCredentials(email, password);
            const token = await UserModel.generateAuthToken((user as any).id);

            console.log(`User: ${user}`);
            console.log(`Token: ${token}`);

            return { token, user };
        } catch (error) {
            console.log(error);
        }
    }

    static async userFindAll(): Promise<UserModel[]> {
        const result = await UserModel.findAll();
        return result;
    }
    static async userFindOne(id: string): Promise<UserModel> {
        const user = await UserModel.findByPk(id);
        if (!user) {
            throw new Error(`User with id ${id} doesn't exist.`);
        }
        return user;
    }

    static async userDelete(id: string): Promise<number> {
        const deletedUser = await UserModel.destroy({ where: { id: id } });
        return deletedUser;
    }
    static async userDeleteAll(): Promise<void> {
        await UserModel.destroy({ where: {} });
    }
    static async userUpdate(
        id: string,
        userBody: UserModel
    ): Promise<[number, UserModel[]]> {
        const updatedUser = await UserModel.update(userBody, {
            where: { id: id },
        });
        return updatedUser;
    }
}

export const userService: UserService = new UserService();
