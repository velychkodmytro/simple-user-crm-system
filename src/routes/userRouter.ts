import {
    initializeUser,
    createUser,
    getAllUsers,
    deleteUserById,
    updateUser,
} from '../controllers/userController';
import express from 'express';

const router = express.Router();

router.post('/createUserFile', initializeUser);
router.post('/createData', createUser);
router.get('/getAll', getAllUsers);
router.delete('/deleteUser', deleteUserById);
router.patch('/updateUser', updateUser);
export default router;
