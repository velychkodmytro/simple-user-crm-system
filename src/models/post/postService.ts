import { v4 as uuidv4 } from 'uuid';
import { PostInfo, PostUpdate } from './interfaces';
import { UserInfo } from '../user/interfaces/index';
import adapter from '../../adapter';

export default class PostService {
    postAdapter = new adapter('./data/post', 'post.json');

    async init(): Promise<void> {
        await this.postAdapter.init();
    }
    async create(data: PostInfo): Promise<void> {
        await this.postAdapter.createData(data);
    }

    //Спросить как избежать интерфейса юзера в этом методе
    async findAll(): Promise<PostInfo[] | UserInfo[]> {
        const result = await this.postAdapter.getFileContent();
        return result;
    }
    async findOne(id: string): Promise<void> {
        await this.postAdapter.getById(id);
    }

    async deletePostById(id: string): Promise<void> {
        await this.postAdapter.deleteById(id);
    }
    async updatePostById(data: PostUpdate, id: string): Promise<void> {
        await this.postAdapter.updateEntityById(data, id);
    }
}
