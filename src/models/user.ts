import * as interfaces from '../interfaces/index';
import { v4 as uuid } from 'uuid';
import adapter from '../adapter';

export default class UserService {
    adapter = new adapter('../../data/user/', 'user.json');

    async init(): Promise<void> {
        await this.adapter.init();
    }
    async create(data: interfaces.UserCreate): Promise<string> {
        const id = uuid();
        await this.adapter.createData({ ...data, id });
        return id;
    }

    async findAll(): Promise<interfaces.UserInfo[]> {
        const result = await this.adapter.getFileContent();
        return result ? result : [];
    }
    async findOne(
        id: string
    ): Promise<interfaces.UserInfo | Record<never, string>> {
        const result = await this.adapter.getById(id);
        return result ? result : {};
    }

    async deleteUserById(id: string): Promise<void> {
        await this.adapter.deleteById(id);
    }
    async updateUserById(
        data: interfaces.UserUpdate,
        id: string
    ): Promise<void> {
        await this.adapter.updateEntityById(data, id);
    }
}

export const userService = new UserService();
