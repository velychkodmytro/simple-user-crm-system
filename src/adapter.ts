import { v4 as uuid } from 'uuid'
import {
  createContent,
  getContent,
  createFolderIfNotExists,
  deleteContent,
  createFileIfNotExists,
} from './workingWithData'

import { UserInfoType } from './types/user_type'

export default class Adapter {
  private readonly pathToFile: string
  private readonly fileName: string

  constructor(pathToFile: string, fileName: string) {
    this.pathToFile = pathToFile
    this.fileName = fileName
  }

  async init(): Promise<void> {
    await createFolderIfNotExists(this.pathToFile)
    await createFileIfNotExists(this.pathToFile, this.fileName)
  }

  async createData(data: UserInfoType): Promise<string> {
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

const user = new Adapter('./routes/sfqweqweasfa', 'user.json')

user.init()
user.createData({ name: 'Alex', age: 30 })
//user.get()
//user.delete('./routes/qwe', 'user.json')
