import { v4 as uuid } from 'uuid'
import {
  createContent,
  getContent,
  createFolderIfNotExists,
  deleteContent,
  createFileIfNotExists,
} from './workingWithData'

import { UserInfoType } from './types/userType'

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

  async createData(data: UserInfoType): Promise<void> {
    await createContent(this.pathToFile, this.fileName, data)
  }

  async get(): Promise<void> {
    await getContent(this.pathToFile, this.fileName)
  }

  async getById(file: string, id: string): Promise<UserInfoType | undefined> {
    const fileContent: string | undefined = await getContent(
      this.pathToFile,
      file
    )
    if (!fileContent) {
      return
    }
    const entity: UserInfoType[] = JSON.parse(fileContent)
    //console.log(entity)
    //return entity.find((ent) => ent.id === id)
  }

  async delete(path: string, nameOfFile: string): Promise<void> {
    await deleteContent(path, nameOfFile)
  }
}

const entity = new Adapter('./routes/123', 'user.json')
//entity.init()
//entity.createData({ name: 'Sasha', age: 45, id: uuid() })
//entity.get()
//entity.getById('user.json', 'bce2b50a-3637-49bf-a94a-cafb269693bd')
// entity.delete('./routes/qwe', 'user.json')
