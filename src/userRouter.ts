import * as controller from './models/controller'
import express from 'express'

const router = express.Router()

router.post('/user/createUserFile', controller.initializeUser)
router.post('/user/createData', controller.createUser)
router.get('/user/getAll', controller.getAllUsers)
router.delete('/user/deleteFile', controller.deleteUserFile)
router.delete('/user/deleteUser', controller.deleteUserById)
router.patch('/user/updateUser', controller.updateUser)
export default router
