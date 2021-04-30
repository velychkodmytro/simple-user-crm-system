import { CreateUserType } from './types/CreateUserType'
import { PostInfoType } from './types/postType'
import {
  addContentToFile,
  getData,
  createFolder,
  deleteContent,
  createFile,
} from './workingWithData'
import { UserUpdate } from './types/userUpdate'
import { UserInfoType } from './types/userType'

export default class Adapter {
  private readonly pathToFile: string
  private readonly fileName: string

  constructor(pathToFile: string, fileName: string) {
    this.pathToFile = pathToFile
    this.fileName = fileName
  }

  async init(): Promise<void> {
    await createFolder(this.pathToFile)
    await createFile(this.pathToFile, this.fileName)
  }

  async createData(
    content: UserInfoType | PostInfoType | CreateUserType
  ): Promise<void> {
    const fileContent = await getData(this.pathToFile, this.fileName)

    await addContentToFile(
      this.pathToFile,
      this.fileName,
      JSON.stringify([...fileContent!, content])
    )
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
    newData: UserUpdate,
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
    await addContentToFile(
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

    await addContentToFile(
      this.pathToFile,
      this.fileName,
      JSON.stringify(newContent)
    )
  }
}
