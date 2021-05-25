import * as FollowerController from './followerController';
import express from 'express';

const router = express.Router();

//router.post('/create', FollowerController.postCreate);
router.get('/all', FollowerController.FollowerGetAll);
//router.get('/:id', FollowerController.postGetOne);
//router.delete('/delete/:id', FollowerController.postDeleteById);
//router.patch('/update/:id', FollowerController.postUpdate);
export default router;
