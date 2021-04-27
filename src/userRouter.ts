import { v4 as uuid } from 'uuid'
import express from 'express'
import User from './models/user'
const router = express.Router()

let user: User = new User()

router.get('/user', (request, response) => {
  response.send('Hello world!')
})

router.post('/user/createUserFile', async (req, res) => {
  try {
    await user.createUserFile()
    res.status(200).send(user)
  } catch (error) {
    res.status(422).send({ error })
  }
})
router.post('/user/createData', async (req, res) => {
  try {
    const id: string = uuid()
    await user.createUserData(req.body)

    res.status(200).send({ user, id })
  } catch (error) {
    res.status(422).send(error)
  }
})

export default router
