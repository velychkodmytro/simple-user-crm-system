import { resolve } from 'path'
import { readFile, open, writeFile, unlink, access, mkdir } from 'fs/promises'
import { UserInfoType } from './types/userType'
import { v4 as uuid } from 'uuid'
import { createDataRequest } from './types/dataRequest'

export async function createFolderIfNotExists(path: string): Promise<void> {
  const pathToDIr: string = resolve(path)
  try {
    await access(pathToDIr)
    console.log('The dir is almost exists')
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
    console.log('The file is almost exists')
  } catch (error) {
    await open(takePath, 'w+')
    console.log('File has been created')
  }
}

export async function createContent(
  path: string,
  fileName: string,
  content: string
): Promise<void> {
  const takePath: string = resolve(path, fileName)

  try {
    //  await writeFile(takePath, JSON.stringify(content), { flag: 'a' })

    await writeFile(takePath, Object(content))
    console.log('Content has been added')
  } catch (error) {
    console.log('No such file')
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
    console.log(error)
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
