import { UserInfoType } from './../types/userType'
import { userUpdate } from '../types/userUpdate'
import adapter from '../adapter'

export default class UserService {
  userAdapter = new adapter('./routes/user', 'user.json')

  async init(): Promise<void> {
    await this.userAdapter.init()
  }
  async create(data: UserInfoType): Promise<void> {
    await this.userAdapter.createData(data)
    await this.userAdapter.getFileContent()
  }

  async findAll(): Promise<UserInfoType[] | undefined> {
    return await this.userAdapter.getFileContent()
  }
  async findOne(id: string): Promise<void> {
    await this.userAdapter.getById(id)
  }

  async deleteUserFile(): Promise<void> {
    await this.userAdapter.deleteFile()
  }
  async deleteUserById(id: string): Promise<void> {
    await this.userAdapter.deleteById(id)
  }
  async updateUserById(data: userUpdate, id: string): Promise<void> {
    await this.userAdapter.updateEntityById(data, id)
  }
}
