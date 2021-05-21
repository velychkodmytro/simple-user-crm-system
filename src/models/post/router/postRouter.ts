import * as Postcontroller from '../controller/postContorller';
import express from 'express';

const router = express.Router();

router.post('/create', Postcontroller.postCreate);
router.get('/all', Postcontroller.postGetAll);
router.get('/:id');
router.delete('/delete/:id', Postcontroller.postDeleteById);
router.patch('/update/:id', Postcontroller.postUpdate);
export default router;
