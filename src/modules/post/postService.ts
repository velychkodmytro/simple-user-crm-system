import PostModel from './postModel';
import UserModel from '../user/userModel';
import UserService from '../user/userService';
import { v4 as uuid, v4 } from 'uuid';

export default class PostService {
    static async сreate(postData: PostModel): Promise<PostModel> {
        try {
            const id = uuid();
            const post = await PostModel.create({
                id,
                ...postData,
            });
            return post;
        } catch (error) {
            console.log(error);
        }
    }

    static async findAllPosts(): Promise<PostModel[]> {
        const result = await PostModel.findAll();
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
