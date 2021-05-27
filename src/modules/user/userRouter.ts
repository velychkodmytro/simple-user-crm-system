import {
    userRegister,
    userLogin,
    userGetAll,
    userGetOne,
    userDeleteAll,
    userDeleteById,
    userUpdateById,
} from './userController';
import express from 'express';

const router = express.Router();

router.post('/create', userRegister);
router.post('/login', userLogin);
router.get('/all', userGetAll);
router.delete('/deleteAll', userDeleteAll);

router.get('/:id', userGetOne);
router.delete('/delete/:id', userDeleteById);
router.patch('/update/:id', userUpdateById);
export default router;
