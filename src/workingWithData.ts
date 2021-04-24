import { v4 as uuidv4 } from 'uuid'
import { resolve } from 'path'
import { readFile, open, writeFile, unlink, access, mkdir } from 'fs/promises'

type UserInfoType = { name: string; age: number }

export const createFolderIfNotExist = async function (path: string) {
  const pathToDIr: string = resolve(path)
  try {
    await access(pathToDIr)
  } catch (error) {
    await mkdir(pathToDIr)
    console.log('The dir has been created')
  }
}

export const createContent = async function (
  path: string,
  fileName: string,
  content: UserInfoType
) {
  const takePath: string = resolve(path, fileName)

  try {
    await access(takePath)
    await writeFile(takePath, JSON.stringify(content))
    console.log('Content has been added')
  } catch (error) {
    await open(takePath, 'a+')
    console.log('File was created')
  }
}

export const getContent = async function (path: string, fileName: string) {
  const filePath: string = resolve(path, `${fileName}`)

  try {
    const fileContent: string = await readFile(filePath, 'utf-8')
    console.log(fileContent)
  } catch (error) {
    console.log(error)
  }
}

export const deleteContent = async function (path: string, fileName: string) {
  const takePath: string = resolve(path, fileName)

  try {
    await unlink(takePath)
    console.log('File was deleted')
  } catch (error) {
    console.log('File doesnt exists')
  }
}
