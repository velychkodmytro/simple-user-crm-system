import { v4 as uuid } from 'uuid'
import { createDataRequest } from './types/dataRequest'
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

  async createData(content: UserInfoType): Promise<void> {
    const fileContent = await getContent(this.pathToFile, this.fileName)
    await createContent(
      this.pathToFile,
      this.fileName,
      JSON.stringify([content, ...fileContent!])
    )
    //return content
  }

  async get(): Promise<void> {
    await getContent(this.pathToFile, this.fileName)
  }

  async getById(
    path: string,
    file: string,
    id: string
  ): Promise<UserInfoType | undefined> {
    const fileContent: string | undefined = await getContent(path, file)
    if (!fileContent) {
      return
    }
    const entity: UserInfoType[] = JSON.parse(fileContent)
    console.log(entity)
    return entity.find((ent) => ent.id === id)
  }

  async delete(path: string, nameOfFile: string): Promise<void> {
    await deleteContent(path, nameOfFile)
  }
}

const entity = new Adapter('./routes/user', 'user.json')
//entity.init()
entity.createData({ name: 'Dima', age: 45, id: uuid() })
//entity.get()
// entity.getById(
//   './routes/user',
//   'user.json',
//   'be6d8b6d-da28-4439-b40d-9d20e3ee47c1'
// )

// entity.delete('./routes/qwe', 'user.json')
