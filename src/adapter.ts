import * as interfaces from './interfaces/index';
import { PostInfoType } from './types/postType';
import {
    addContentToFile,
    getData,
    createFolder,
    createFile,
} from './workingWithData';
import { UserUpdate } from './types/userUpdate';

export default class Adapter {
    private readonly pathToFile: string;
    private readonly fileName: string;

    constructor(pathToFile: string, fileName: string) {
        this.pathToFile = pathToFile;
        this.fileName = fileName;
    }

    async init(): Promise<void> {
        await createFolder(this.pathToFile);
        await createFile(this.pathToFile, this.fileName);
    }

    async createData(
        content: interfaces.UserInfo | PostInfoType | interfaces.UserCreate
    ): Promise<void> {
        const fileContent = await getData(this.pathToFile, this.fileName);

        if (!fileContent) {
            return;
        }
        await addContentToFile(
            this.pathToFile,
            this.fileName,
            JSON.stringify([...fileContent, content])
        );
    }

    getFileContent(): Promise<interfaces.UserInfo[]> {
        return getData(this.pathToFile, this.fileName);
    }

    async getById(id: string): Promise<interfaces.UserInfo | undefined> {
        const fileContent = await getData(this.pathToFile, this.fileName);
        if (!fileContent) {
            return;
        }
        const result = fileContent.find((ent) => ent.id === id);
        if (!result) {
            throw new Error(`The entity with id ${id} doesn't exist.`);
        }
        console.log(result);
        return result;
    }

    async updateEntityById(
        newData: UserUpdate,
        id: string
    ): Promise<interfaces.UserInfo | undefined> {
        const fileContent = await getData(this.pathToFile, this.fileName);
        if (!fileContent) {
            return;
        }
        const newContent = fileContent.map((ent: interfaces.UserInfo) => {
            if (ent.id === id) {
                return {
                    ...newData,
                    id,
                };
            }
            return ent;
        });
        await addContentToFile(
            this.pathToFile,
            this.fileName,
            JSON.stringify(newContent)
        );
        return { ...newData, id };
    }

    async deleteById(id: string): Promise<interfaces.UserInfo | undefined> {
        const fileContent = await getData(this.pathToFile, this.fileName);
        if (!fileContent) {
            return;
        }
        const newContent = fileContent.filter((ent) => ent.id !== id);

        await addContentToFile(
            this.pathToFile,
            this.fileName,
            JSON.stringify(newContent)
        );
    }
}
