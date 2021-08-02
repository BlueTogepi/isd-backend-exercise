import {Router} from 'express';
import { createPost, createReply, deletePost, editPost, getPost, getPostArr } from '../controllers/post.controller.js';

const router = Router();

router.post('/post', createPost);
router.get('/posts', getPostArr);
router.get('/post/:postId', getPost);
router.put('/post/:postId', editPost);
router.delete('/post/:postId', deletePost);
router.post('/post/:postId/reply', createReply);

export default router;