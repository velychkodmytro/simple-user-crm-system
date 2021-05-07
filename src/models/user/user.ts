import { UserInfo, UserCreate, UserUpdate } from './interfaces';
import { v4 as uuid } from 'uuid';

import adapter from '../../adapter';

export default class UserService {
    adapter = new adapter('./data/user', 'user.json');

    async init(): Promise<void> {
        await this.adapter.init();
    }
    async create(data: UserCreate): Promise<string> {
        const id = uuid();
        await this.adapter.createData({ ...data, id });
        return id;
    }

    async findAll(): Promise<UserInfo[] | undefined> {
        await this.adapter.getFileContent();
        return;
    }
    async findOne(id: string): Promise<void> {
        await this.adapter.getById(id);
    }

    async deleteUserById(id: string): Promise<void> {
        await this.adapter.deleteById(id);
    }
    async updateUserById(data: UserUpdate): Promise<void> {
        const { id, ...otherData } = data;
        await this.adapter.updateEntityById(otherData, id);
    }
}

export const userService: UserService = new UserService();
