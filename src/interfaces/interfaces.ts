export interface initializeUserInterface {
  path: string
  nameOfFile: string
}

export interface CreateUserInterface {
  name: string
  age: number
}

export interface DeleteUserInterface {
  id: string
}
export interface UpdateUserInterface {
  name: string
  age: number
  id: string
}
