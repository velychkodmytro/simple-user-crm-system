import * as fs from 'fs'
import { v4 as uuidv4 } from 'uuid'
//import user from '../models/user'

//НЕ ИСПОЛЬЗУЮ НИГДЕ
export default class Item {
  id: string
  text: string

  constructor(id: string, text: string) {
    this.id = id
    this.text = text
  }
}

const item: Item = new Item(uuidv4(), 'Hello, my brother')
console.log(item)
