import { v4 as uuid } from 'uuid'
import {
  createContent,
  getData,
  createFolderIfDoesNotExists,
  deleteContent,
  createFileIfDoesNotExists,
} from './workingWithData'
import { userUpdate } from './types/userUpdate'
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
      JSON.stringify([...fileContent!, content])
    )
    return id
  }

  async getFileContent(): Promise<UserInfoType[] | undefined> {
    return await getData(this.pathToFile, this.fileName)
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
    newData: userUpdate,
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

  async deleteFile(): Promise<void> {
    await deleteContent(this.pathToFile, this.fileName)
  }

  async deleteById(id: string): Promise<UserInfoType | undefined> {
    const fileContent = await getData(this.pathToFile, this.fileName)
    if (!fileContent) {
      return
    }
    const newContent = fileContent.filter((ent) => ent.id !== id)

    await createContent(
      this.pathToFile,
      this.fileName,
      JSON.stringify(newContent)
    )
  }
}

const entity = new Adapter('./routes/qwe', 'user.json')
