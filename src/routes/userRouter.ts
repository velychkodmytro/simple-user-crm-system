import {
  initializeUser,
  createUser,
  getAllUsers,
  deleteUserFile,
  deleteUserById,
  updateUser,
} from '../controllers/userController'
import express from 'express'

const router = express.Router()

router.post('/createUserFile', initializeUser)
router.post('/createData', createUser)
router.get('/getAll', getAllUsers)
router.delete('/deleteFile', deleteUserFile)
router.delete('/deleteUser', deleteUserById)
router.patch('/updateUser', updateUser)
export default router
