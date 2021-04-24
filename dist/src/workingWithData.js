"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContent = exports.getContent = exports.createContent = exports.createFolderIfNotExist = void 0;
const path_1 = require("path");
const promises_1 = require("fs/promises");
const createFolderIfNotExist = async function (path) {
    const pathToDIr = path_1.resolve(path);
    try {
        await promises_1.access(pathToDIr);
        return;
    }
    catch (error) {
        await promises_1.mkdir(pathToDIr);
        console.log('The dir has been created');
    }
};
exports.createFolderIfNotExist = createFolderIfNotExist;
// export const createContent = async function (
//   path: string,
//   fileName: string,
//   content: UserInfoType
// ) {
//   const takePath: string = resolve(path, fileName)
//   try {
//     if (!fileName) {
//       await open(takePath, 'a+')
//       console.log('File was created')
//     }
//     await writeFile(takePath, JSON.stringify(content))
//     console.log('Content has been added')
//   } catch (error) {
//     console.log(error)
//   }
// }
const createContent = async function (path, fileName, content) {
    const takePath = path_1.resolve(path, fileName);
    try {
        await promises_1.access(takePath);
        await promises_1.writeFile(takePath, JSON.stringify(content));
        console.log('Content has been added');
    }
    catch (error) {
        await promises_1.open(takePath, 'a+');
        console.log('File was created');
    }
};
exports.createContent = createContent;
const getContent = async function (path, fileName) {
    const filePath = path_1.resolve(path, `${fileName}`);
    try {
        const fileContent = await promises_1.readFile(filePath, 'utf-8');
        console.log(fileContent);
    }
    catch (error) {
        console.log(error);
    }
};
exports.getContent = getContent;
const deleteContent = async function (path, fileName) {
    const takePath = path_1.resolve(path, fileName);
    try {
        await promises_1.unlink(takePath);
        console.log('File was deleted');
    }
    catch (error) {
        console.log('File doesnt exists');
    }
};
exports.deleteContent = deleteContent;
// const createFolder = createFolderIfNotExist('./routes/qwerty')
// const postAndUpdateFile = createContent('./routes/user/', 'user1.json', {
//   name: 'Dima',
//   age: 20,
// })
// const getFile = getContent('./routes/user/', 'user1.json')
// const deleteFile = deleteContent('./routes/user/', 'user4.json')
//# sourceMappingURL=workingWithData.js.map