import {
    createUser,
    userGetAll,
    userGetOne,
    userDeleteById,
    userUpdateById,
} from './userController';
import express from 'express';

const router = express.Router();

router.post('/create', createUser);
router.get('/all', userGetAll);
router.get('/:id', userGetOne);
router.delete('/delete/:id', userDeleteById);
router.patch('/update/:id', userUpdateById);
export default router;
