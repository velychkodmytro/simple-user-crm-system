import { v4 as uuid } from 'uuid'
import {
  createFolderIfNotExist,
  createContent,
  getContent,
  deleteContent,
} from './workingWithData'

import { UserInfoType } from './types/user_type'

class WorkingWithData {
  private readonly pathToFile: string
  private readonly fileName: string

  constructor(pathToFile: string, fileName: string) {
    this.pathToFile = pathToFile
    this.fileName = fileName
  }

  async init(data: UserInfoType): Promise<void> {
    await createFolderIfNotExist(this.pathToFile)
    await createContent(this.pathToFile, this.fileName, data)
  }

  async create(data: UserInfoType): Promise<string> {
    const id = uuid()
    await createContent(this.pathToFile, this.fileName, data)
    return id
  }

  async get(): Promise<void> {
    await getContent(this.pathToFile, this.fileName)
  }

  async delete(path: string, nameOfFile: string): Promise<void> {
    await deleteContent(path, nameOfFile)
  }
}

const user = new WorkingWithData('./routes/user111', 'user.json')

user.init({ name: 'Dima', age: 20 })
user.create({ name: 'Alex', age: 30 })
user.get()
//user.delete('./routes/dfaf', 'user.json')
