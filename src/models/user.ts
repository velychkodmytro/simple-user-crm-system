import { UserInfoType } from './../types/userType'
import { v4 as uuid } from 'uuid'

import adapter from '../adapter'

export default class UserService {
  userAdapter = new adapter('./routes/qwe', 'user.json')

  async init(): Promise<void> {
    await this.userAdapter.init()
  }
  async create(data: UserInfoType): Promise<void> {
    await this.userAdapter.createData(data)
    await this.userAdapter.getFileContent()
  }

  async findAll(): Promise<void> {
    await this.userAdapter.getFileContent()
  }
  async findOne(id: string): Promise<void> {
    await this.userAdapter.getById(id)
  }

  async deleteUser(path: string, nameOfFile: string): Promise<void> {
    await this.userAdapter.delete(path, nameOfFile)
  }
}

const user: UserService = new UserService()

user.init()
user.create({ name: 'Kirill', age: 24, id: uuid() })
user.findAll()
user.findOne('d9a4e487-8605-4cb8-a9ec-d751e796f22e')
user.deleteUser('./routes/user/', 'user111.json')
