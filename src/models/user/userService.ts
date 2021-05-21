import { v4 as uuid } from 'uuid';
import UserModel from './userModel';

export default class UserService {
    static async userCreate(userData: UserModel): Promise<UserModel> {
        const id = uuid();
        const user = await UserModel.create({ id, ...userData });
        return user;
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
