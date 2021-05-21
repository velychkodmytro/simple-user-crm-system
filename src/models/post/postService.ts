import PostModel from './postModel';
import UserModel from '../user/userModel';
import UserService from '../user/userService';
import { v4 as uuid } from 'uuid';

export default class PostService {
    static async сreate(
        postData: PostModel,
        ownerId: string
    ): Promise<PostModel> {
        const id = uuid();
        const owner = await UserService.userFindOne(ownerId);
        const post = await PostModel.create({
            id,
            ...postData,
            ownerId: owner,
        });
        return post;
    }

    static async findAllPosts(
        ownerId: string
    ): Promise<UserModel[] | PostModel[]> {
        const owner = await UserModel.findByPk(ownerId);
        const result = await PostModel.findAll({ where: { owner: ownerId } });
        return result;
    }
    static async findOne(id: string): Promise<PostModel> {
        const post = await PostModel.findByPk(id);
        if (!post) {
            throw new Error(`Post with id ${id} doesn't exist.`);
        }
        return post;
    }

    static async deletePostById(id: string): Promise<number> {
        const deletedPost = await PostModel.destroy({ where: { id: id } });
        return deletedPost;
    }
    static async updatePostById(
        data: PostModel,
        id: string
    ): Promise<[number, PostModel[]]> {
        const updetedPost = await PostModel.update(data, { where: { id: id } });
        return updetedPost;
    }
}
