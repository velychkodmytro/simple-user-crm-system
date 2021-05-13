import {
    initializeUser,
    createUser,
    getAllUsers,
    deleteUserById,
    updateUser,
} from '../controller/userController';
import express from 'express';

const router = express.Router();

router.post('/file', initializeUser);
router.post('/create', createUser);
router.get('/all', getAllUsers);
router.delete('/delete/:id', deleteUserById);
router.patch('/update/:id', updateUser);
export default router;
