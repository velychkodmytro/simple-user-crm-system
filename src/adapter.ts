import { v4 as uuidv4 } from 'uuid'
import User from './models/user'
import {
  createFolderIfNotExist,
  createContent,
  getContent,
  deleteContent,
} from './workingWithData'

type UserInfoType = { name: string; age: number }

class WorkingWithData {
  pathToFile: string
  fileName: string
  //content: UserInfoType

  // private readonly BodyaLox:string

  constructor(pathToFile: string, fileName: string) {
    this.pathToFile = pathToFile
    this.fileName = fileName
    // this.content = content
  }

  async init(data: UserInfoType) {
    await createFolderIfNotExist(this.pathToFile)
    await createContent(this.pathToFile, this.fileName, data)
  }

  async create(data: UserInfoType) {
    const id = uuidv4()
    await createContent(this.pathToFile, this.fileName, data)
    return id
  }

  async get() {
    await getContent(this.pathToFile, this.fileName)
  }

  async delete(path: string, nameOfFile: string) {
    await deleteContent(path, nameOfFile)
  }
}

const user = new WorkingWithData('./routes/dfaf', 'user.json')

user.init({ name: 'Dima', age: 20 })
user.create({ name: 'Alex', age: 30 })
//user.get()
//user.delete('./routes/dfaf', 'user.json')
