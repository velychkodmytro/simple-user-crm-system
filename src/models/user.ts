import { UserInfoType } from './../types/userType'
import { v4 as uuid } from 'uuid'

import adapter from '../adapter'

const userAdapter = new adapter('./routes/qwe', 'user.json')

export default class User {
  async createUserFile(): Promise<void> {
    await userAdapter.init()
  }
  async createUserData(data: UserInfoType): Promise<void> {
    await userAdapter.createData(data)
    await userAdapter.get()
  }

  async getData(): Promise<void> {
    await userAdapter.get()
  }
  async getUserById(path: string, file: string, id: string): Promise<void> {
    await userAdapter.getById(path, file, id)
  }

  async deleteUser(path: string, nameOfFile: string): Promise<void> {
    await userAdapter.delete(path, nameOfFile)
  }
}

const user: User = new User()

user.createUserFile()

user.createUserData({ name: 'Kirill', age: 24, id: uuid() })

//user.getData()
// user.getUserById(
//   './routes/user/',
//   'user111.json',
//   'd9a4e487-8605-4cb8-a9ec-d751e796f22e'
// )
//user.deleteUser('./routes/user/', 'user111.json')
