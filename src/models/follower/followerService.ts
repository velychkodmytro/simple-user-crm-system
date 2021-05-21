//import PostModel from './postModel';
import UserModel from '../user/userModel';
import FollowerModel from './followerModel';
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
