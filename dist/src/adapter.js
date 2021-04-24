"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const workingWithData_1 = require("./workingWithData");
class WorkingWithData {
    //content: UserInfoType
    constructor(pathToFile, fileName) {
        this.pathToFile = pathToFile;
        this.fileName = fileName;
        // this.content = content
    }
    async init(data) {
        await workingWithData_1.createFolderIfNotExist(this.pathToFile);
        await workingWithData_1.createContent(this.pathToFile, this.fileName, data);
    }
    async create(data) {
        const id = uuid_1.v4();
        const createFile = await workingWithData_1.createContent(this.pathToFile, this.fileName, data);
        return { id, createFile };
    }
    async get() {
        await workingWithData_1.getContent(this.pathToFile, this.fileName);
    }
    async delete(path, nameOfFile) {
        await workingWithData_1.deleteContent(path, nameOfFile);
    }
}
const user = new WorkingWithData('./routes/dfaf', 'user.json');
user.init({ name: 'Dima', age: 20 });
user.create({ name: 'Alex', age: 30 });
//user.get()
//user.delete('./routes/dfaf', 'user.json')
//# sourceMappingURL=adapter.js.map