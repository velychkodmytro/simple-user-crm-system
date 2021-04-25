"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Item {
    constructor(id, text) {
        this.id = id;
        this.text = text;
    }
}
exports.default = Item;
const item = new Item(uuid_1.v4(), 'Hello, my brother');
console.log(item);
//# sourceMappingURL=items.js.map