"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContent = exports.getContent = exports.createContent = exports.createFolderIfNotExist = void 0;
const path_1 = require("path");
const promises_1 = require("fs/promises");
async function createFolderIfNotExist(path) {
    const pathToDIr = path_1.resolve(path);
    try {
        await promises_1.access(pathToDIr);
    }
    catch (error) {
        await promises_1.mkdir(pathToDIr);
        console.log('The dir has been created');
    }
}
exports.createFolderIfNotExist = createFolderIfNotExist;
async function createContent(path, fileName, content) {
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
}
exports.createContent = createContent;
async function getContent(path, fileName) {
    const filePath = path_1.resolve(path, `${fileName}`);
    try {
        const fileContent = await promises_1.readFile(filePath, 'utf-8');
        console.log(fileContent);
    }
    catch (error) {
        console.log(error);
    }
}
exports.getContent = getContent;
async function deleteContent(path, fileName) {
    const takePath = path_1.resolve(path, fileName);
    try {
        await promises_1.unlink(takePath);
        console.log('File was deleted');
    }
    catch (error) {
        console.log('File doesnt exists');
    }
}
exports.deleteContent = deleteContent;
//# sourceMappingURL=workingWithData.js.map