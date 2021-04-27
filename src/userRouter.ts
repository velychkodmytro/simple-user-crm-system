import { v4 as uuid } from 'uuid'
import express from 'express'
import User from './models/user'
import { Request, Response, NextFunction } from 'express'
const router = express.Router()

let user: User = new User()

router.get('/user', (req: Request, res: Response) => {
  res.send('Hello world!')
})

router.post('/user/createUserFile', async (req: Request, res: Response) => {
  try {
    await user.createUserFile()
    res.status(200).send(user)
  } catch (error) {
    res.status(422).send({ error })
  }
})
router.post('/user/createData', async (req: Request, res: Response) => {
  try {
    await user.createUserData(req.body)

    res.status(200).send({ user })
  } catch (error) {
    res.status(422).send(error)
  }
})

export default router
