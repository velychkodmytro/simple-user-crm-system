import { UserInfoType } from './types/userType'
import { v4 as uuid } from 'uuid'
import express from 'express'
import UserService from './models/user'
import { Request, Response, NextFunction } from 'express'

const router = express.Router()

let user: UserService = new UserService()

interface RequestBody {
  name: string
  age: number
}

router.get('/user', (req: Request, res: Response) => {
  res.send('Hello world!')
})

router.post(
  '/user/createUserFile',
  async (req: Request<{}, {}, RequestBody, {}>, res: Response) => {
    try {
      await user.init()

      res.status(200).send(user)
    } catch (error) {
      res.status(422).send({ error })
    }
  }
)

router.post(
  '/user/createData',
  async (req: Request<{}, {}, RequestBody, {}>, res: Response) => {
    try {
      const { name, age } = req.body
      const id = uuid()
      await user.create({ name, age, id })

      res.status(200).send({ message: 'Success' })
    } catch (error) {
      res.status(422).send(error)
    }
  }
)

export default router
