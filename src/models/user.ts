import { v4 as uuidv4 } from 'uuid'

export default class User {
  id: string
  name: string
  age: number

  constructor(id: string, name: string, age: number) {
    this.id = id
    this.name = name
    this.age = age
  }
}

let a: number
const user: User = new User(uuidv4(), 'Dima', 20)
console.log(user)
