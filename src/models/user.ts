import { CreateUserType } from './../types/CreateUserType'
import { UserInfoType } from './../types/userType'
import { UserUpdate } from '../types/userUpdate'
import { v4 as uuid } from 'uuid'
import adapter from '../adapter'

export default class UserService {
  adapter = new adapter('./routes/user', 'user.json')

  async init(): Promise<void> {
    await this.adapter.init()
  }
  async create(data: CreateUserType): Promise<string> {
    const id = uuid()
    await this.adapter.createData({ ...data, id })
    return id
  }

  async findAll(): Promise<UserInfoType[] | undefined> {
    return await this.adapter.getFileContent()
  }
  async findOne(id: string): Promise<void> {
    await this.adapter.getById(id)
  }

  async deleteUserFile(): Promise<void> {
    await this.adapter.deleteFile()
  }
  async deleteUserById(id: string): Promise<void> {
    await this.adapter.deleteById(id)
  }
  async updateUserById(data: UserUpdate, id: string): Promise<void> {
    await this.adapter.updateEntityById(data, id)
  }
}

export let userService: UserService = new UserService()
