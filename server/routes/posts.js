import express from 'express';
import { getPosts, createPost, updatePost, deletePost, likePost, getPost } from '../controllers/posts.js';

const router = express.Router();
router.get('/', getPosts); //all posts
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
router.get('/:id', getPost); // single post

export default router;
