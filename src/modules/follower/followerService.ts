//import PostModel from './postModel';
import PostModel from '../post/postModel';
import UserModel from '../user/userModel';
import UserService from '../user/userService';
import FollowerModel from './followerModel';
import { v4 as uuid, v4 } from 'uuid';

export default class FollowerService {
    static async findAllFollowers(): Promise<FollowerModel[]> {
        const follower = await FollowerModel.findAll();
        return follower;
    }

    static async deleteFollower(id: string): Promise<number> {
        const follower = await FollowerModel.destroy({ where: { id: id } });
        return follower;
    }
}
