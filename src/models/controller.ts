import express from 'express'
const router = express.Router()
import { v4 as uuid } from 'uuid'
import { Request, Response, NextFunction } from 'express'
import UserService from '../models/user'

interface RequestBody {
  name: string
  age: number
  id: string
  path: string
  nameOfFile: string
}

let user: UserService = new UserService()

export const initializeUser = async (
  req: Request<{}, {}, RequestBody, {}>,
  res: Response
) => {
  try {
    await user.init()
    const { nameOfFile } = req.body
    if (nameOfFile) {
      res.status(200).send({ message: 'Dir/file is already exists' })
    }
    res.status(200).send({ message: 'Dir/file has been successfuly created' })
  } catch (error) {
    res.status(422).send({ error })
  }
}
export const createUser = async (
  req: Request<{}, {}, RequestBody, {}>,
  res: Response
) => {
  try {
    const { name, age } = req.body
    const id = uuid()
    await user.create({ name, age, id })
    res.status(200).send({ message: `User was successfuly created ` })
  } catch (error) {
    res.status(422).send({ error })
  }
}

export const getAllUsers = async (
  req: Request<{}, {}, RequestBody, {}>,
  res: Response
) => {
  try {
    const users = await user.findAll()
    res.status(200).send(users)
  } catch (error) {
    res.status(402).send({ error })
  }
}

export const deleteUserFile = async (
  req: Request<{}, {}, RequestBody, {}>,
  res: Response
) => {
  try {
    await user.deleteUserFile()
    res.status(200).send({ message: `File  was successfuly deleted` })
  } catch (error) {
    res.status(402).send({ error })
  }
}
export const deleteUserById = async (
  req: Request<{}, {}, RequestBody, {}>,
  res: Response
) => {
  try {
    const { id } = req.body
    await user.deleteUserById(id)
    res.status(200).send({ message: `User  was successfuly deleted` })
  } catch (error) {
    res.status(402).send({ error })
  }
}

export const updateUser = async (
  req: Request<{}, {}, RequestBody, {}>,
  res: Response
) => {
  try {
    const { name, age, id } = req.body
    await user.updateUserById({ name, age }, id)

    res.status(200).send({ message: `User  was successfuly deleted` })
  } catch (error) {
    res.status(402).send({ error })
  }
}
