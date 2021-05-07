// import { v4 as uuidv4 } from 'uuid'
// import { PostInfoType } from '../types/postType'
// import { UserInfoType } from '../types/userType'
// import { UserUpdate } from '../types/userUpdate'
// import adapter from '../adapter'

// export default class PostService {
//   postAdapter = new adapter('./routes/post', 'post.json')

//   async init(): Promise<void> {
//     await this.postAdapter.init()
//   }
//   async create(data: PostInfoType): Promise<void> {
//     await this.postAdapter.createData(data)
//     await this.postAdapter.getFileContent()
//   }

//   async findAll(): Promise<UserInfoType[] | undefined> {
//     return await this.postAdapter.getFileContent()
//   }
//   async findOne(id: string): Promise<void> {
//     await this.postAdapter.getById(id)
//   }

//   async deleteUserFile(): Promise<void> {
//     await this.postAdapter.deleteFile()
//   }
//   async deleteUserById(id: string): Promise<void> {
//     await this.postAdapter.deleteById(id)
//   }
//   async updateUserById(data: UserUpdate, id: string): Promise<void> {
//     await this.postAdapter.updateEntityById(data, id)
//   }
// }
