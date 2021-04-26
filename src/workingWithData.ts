import { resolve } from 'path'
import { readFile, open, writeFile, unlink, access, mkdir } from 'fs/promises'
import { UserInfoType } from './types/user_type'

export async function createFolderIfNotExists(path: string): Promise<void> {
  const pathToDIr: string = resolve(path)
  try {
    await access(pathToDIr)
  } catch (error) {
    await mkdir(pathToDIr)
    console.log('The dir has been created')
  }
}

export async function createFileIfNotExists(
  path: string,
  fileName: string
): Promise<void> {
  const takePath: string = resolve(path, fileName)
  try {
    await access(takePath)
  } catch (error) {
    await open(takePath, 'a+')
    console.log('File has been created')
  }
}

export async function createContent(
  path: string,
  fileName: string,
  content: UserInfoType
): Promise<void> {
  const takePath: string = resolve(path, fileName)

  try {
    await writeFile(takePath, JSON.stringify(content))
    console.log('Content has been added')
  } catch (error) {
    throw new Error(error)
  }
}

export async function getContent(
  path: string,
  fileName: string
): Promise<string | undefined> {
  const filePath: string = resolve(path, `${fileName}`)

  try {
    const fileContent: string = await readFile(filePath, 'utf-8')
    return fileContent
  } catch (error) {
    throw new Error(error)
  }
}

export async function deleteContent(path: string, fileName: string) {
  const takePath: string = resolve(path, fileName)

  try {
    await unlink(takePath)
    console.log('File was deleted')
  } catch (error) {
    console.log('File doesnt exists')
  }
}
