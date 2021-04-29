import { v4 as uuid } from 'uuid'
import {
  createContent,
  getData,
  createFolderIfDoesNotExists,
  deleteContent,
  createFileIfDoesNotExists,
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
    await createFolderIfDoesNotExists(this.pathToFile)
    await createFileIfDoesNotExists(this.pathToFile, this.fileName)
  }

  async createData(content: UserInfoType): Promise<string> {
    const fileContent = await getData(this.pathToFile, this.fileName)
    const id: string = uuid()
    await createContent(
      this.pathToFile,
      this.fileName,
      JSON.stringify([content, ...fileContent!])
    )
    return id
  }

  async getFileContent(): Promise<void> {
    await getData(this.pathToFile, this.fileName)
  }

  async getById(id: string): Promise<UserInfoType | undefined> {
    const fileContent = await getData(this.pathToFile, this.fileName)
    if (!fileContent) {
      return
    }
    const result = fileContent.find((ent) => ent.id === id)
    if (!result) {
      throw new Error(`The entity with id ${id} doesn't exist.`)
    }
    console.log(result)
    return result
  }

  async updateEntityById(
    newData: object,
    id: string
  ): Promise<UserInfoType | undefined> {
    const fileContent = await getData(this.pathToFile, this.fileName)
    if (!fileContent) {
      return
    }
    const newContent = fileContent.map((ent: UserInfoType) => {
      if (ent.id === id) {
        return {
          ...newData,
          id,
        }
      }
      return ent
    })
    await createContent(
      this.pathToFile,
      this.fileName,
      JSON.stringify(newContent)
    )
    return { ...newData, id }
  }

  async delete(path: string, nameOfFile: string): Promise<void> {
    await deleteContent(path, nameOfFile)
  }

  async deleteById(id: string): Promise<UserInfoType | undefined> {
    const fileContent = await getData(this.pathToFile, this.fileName)
    if (!fileContent) {
      return
    }
    const newContent = fileContent.filter((ent) => ent.id === id)

    await createContent(
      this.pathToFile,
      this.fileName,
      JSON.stringify(newContent)
    )
  }
}

const entity = new Adapter('./routes/111', 'user.json')

//entity.init()

//entity.createData({ name: 'Dima', age: 45, id: uuid() })

//entity.getFileContent()
//entity.getById('55ed4942-6bd9-4894-8afe-b6fa88725339')
entity.updateEntityById(
  { name: 'Alex', age: 20, id: uuid() },
  '3f54d8d8-17bf-4836-836a-2dc6665c2f6c'
)
//entity.deleteById('ace01b92-750d-4724-ad7f-f60c19e433a5')
// entity.delete('./routes/qwe', 'user.json')
