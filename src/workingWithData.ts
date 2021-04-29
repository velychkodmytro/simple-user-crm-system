import { UserInfoType } from './types/userType'
import { resolve } from 'path'
import { readFile, open, writeFile, unlink, access, mkdir } from 'fs/promises'

export async function createFolderIfDoesNotExists(path: string): Promise<void> {
  const pathToDIr: string = resolve(path)
  try {
    await access(pathToDIr)
    console.log('The dir is almost exists')
  } catch (error) {
    await mkdir(pathToDIr)
    console.log('The dir has been created')
  }
}

export async function createFileIfDoesNotExists(
  path: string,
  fileName: string
): Promise<void> {
  const takePath: string = resolve(path, fileName)
  try {
    await access(takePath)
    console.log('The file is almost exists')
  } catch (error) {
    await writeFile(takePath, '[]')
    console.log('File has been created')
  }
}

export async function createContent(
  path: string,
  fileName: string,
  content: string
): Promise<string | undefined> {
  const takePath: string = resolve(path, fileName)

  try {
    await writeFile(takePath, content)
    return content
  } catch (error) {
    throw new Error(error)
  }
}

export async function getData(
  path: string,
  fileName: string
): Promise<UserInfoType[] | undefined> {
  const filePath: string = resolve(path, `${fileName}`)

  try {
    const fileContent: string = await readFile(filePath, 'utf-8')
    console.log(fileContent)
    return JSON.parse(fileContent)
  } catch (error) {
    throw new Error(error)
  }
}

export async function deleteContent(path: string, fileName: string) {
  const takePath: string = resolve(path, fileName)

  try {
    await unlink(takePath)
    if (!takePath) {
      console.log('File was deleted')
    }
    console.log('File doesnt exists')
  } catch (error) {
    throw new Error(error)
  }
}
