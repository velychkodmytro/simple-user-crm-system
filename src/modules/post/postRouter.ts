import * as Postcontroller from './postContorller';
import express from 'express';

const router = express.Router();

router.post('/create', Postcontroller.postCreate);
router.get('/all', Postcontroller.postGetAll);
router.get('/:id', Postcontroller.postGetOne);
router.delete('/delete/:id', Postcontroller.postDeleteById);
router.patch('/update/:id', Postcontroller.postUpdate);
export default router;
