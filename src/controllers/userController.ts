import { userService } from './../models/user'
import { Request, Response, NextFunction } from 'express'

import {
  initializeUserInterface,
  CreateUserInterface,
  DeleteUserInterface,
  UpdateUserInterface,
} from '../interfaces/interfaces'

export const initializeUser = async (
  req: Request<{}, {}, initializeUserInterface, {}>,
  res: Response
) => {
  try {
    await userService.init()
    const { path, nameOfFile } = req.body
    if (path || nameOfFile) {
      res.status(200).send({ message: 'Dir/file is already exists' })
    }
    res.status(200).send({ message: 'Dir/file has been successfuly created' })
  } catch (error) {
    res.status(422).send({ error })
  }
}
export const createUser = async (
  req: Request<{}, {}, CreateUserInterface, {}>,
  res: Response
) => {
  try {
    const { name, age } = req.body
    await userService.create({ name, age })
    res.status(200).send({ message: `User was successfuly created ` })
  } catch (error) {
    res.status(422).send({ error })
  }
}

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.findAll()
    res.status(200).send(users)
  } catch (error) {
    res.status(402).send({ error })
  }
}

export const deleteUserFile = async (req: Request, res: Response) => {
  try {
    await userService.deleteUserFile()
    res.status(200).send({ message: `File  was successfuly deleted` })
  } catch (error) {
    res.status(402).send({ error })
  }
}
export const deleteUserById = async (
  req: Request<{}, {}, DeleteUserInterface, {}>,
  res: Response
) => {
  try {
    const { id } = req.body
    await userService.deleteUserById(id)
    res
      .status(200)
      .send({ message: `User with id: ${id} was successfuly deleted` })
  } catch (error) {
    res.status(402).send({ error })
  }
}

export const updateUser = async (
  req: Request<{}, {}, UpdateUserInterface, {}>,
  res: Response
) => {
  try {
    const { name, age, id } = req.body
    await userService.updateUserById({ name, age }, id)
    res
      .status(200)
      .send({ message: `User with id: ${id} was successfuly updated` })
  } catch (error) {
    res.status(402).send({ error })
  }
}
