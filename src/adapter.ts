import { PostInfo, PostUpdate } from './models/post/interfaces';
import {
    addContentToFile,
    getData,
    createFolder,
    createFile,
} from './workingWithData';

import { UserInfo, UserCreate, UserUpdate } from './models/user/interfaces';

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

    async createData(content: UserInfo | PostInfo | UserCreate): Promise<void> {
        const fileContent = await getData(this.pathToFile, this.fileName);

        await addContentToFile(
            this.pathToFile,
            this.fileName,
            JSON.stringify([...fileContent!, content])
        );
    }

    async getFileContent(): Promise<UserInfo[] | PostInfo[]> {
        const result = await getData(this.pathToFile, this.fileName);
        return result;
    }

    async getById(id: string): Promise<UserInfo | PostInfo> {
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
        newData: UserUpdate | PostUpdate,
        id: string
    ): Promise<UserInfo | PostUpdate> {
        const fileContent = await getData(this.pathToFile, this.fileName);
        if (!fileContent) {
            return;
        }
        const newContent = fileContent.map((ent: UserInfo) => {
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

    async deleteById(id: string): Promise<UserInfo | PostInfo> {
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
