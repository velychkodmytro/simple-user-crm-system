"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
//НЕ ИСПОЛЬЗУЮ НИГДЕ
class User {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
exports.default = User;
let a;
const user = new User(uuid_1.v4(), 'Dima', 20);
console.log(user);
//# sourceMappingURL=user.js.map