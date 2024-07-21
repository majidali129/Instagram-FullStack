import express from 'express';
import {
  createPost,
  deletePost,
  getAllPosts,
  getAllPostsByUser,
  getPostDetails,
  savePost,
  togglePostLike,
  updatePost,
} from '../controllers/post.controller.js';
import {
  createPostValidator,
  updatePostValidator,
} from '../validators/post.validator.js';
import { validate } from '../validators/validate.validator.js';
import { upload } from '../middlewares/multer.middleware.js';
import { verifyJWT } from '../middlewares/verifyJWT.middleware.js';
import {
  mongodbBodyIdValidator,
  mongodbPathIdValidator,
} from '../validators/mongodb.validator.js';

const router = express.Router();

router.use(verifyJWT);
router
  .route('/')
  .get(getAllPosts)
  .post(upload.single('image'), createPostValidator(), validate, createPost);
router.route('/user-data').get(getAllPostsByUser);

router
  .route('/save-post')
  .post(mongodbBodyIdValidator('postId'), validate, savePost);

router
  .route('/toggleLike')
  .patch(mongodbBodyIdValidator('postId'), validate, togglePostLike);

router
  .route('/:postId')
  .get(mongodbPathIdValidator('postId'), validate, getPostDetails)
  .delete(mongodbPathIdValidator('postId'), validate, deletePost)
  .patch(
    updatePostValidator(),
    mongodbPathIdValidator('postId'),
    validate,
    updatePost
  );

export default router;
