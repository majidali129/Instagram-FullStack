import express from 'express';
import {
  addComment,
  updateComment,
  deleteComment,
  getAllComments,
  getCommentDetail,
} from '../controllers/comment.controller.js';
import {
  addCommentValidator,
  updateCommentValidator,
} from '../validators/comment.validator.js';
import { validate } from '../validators/validate.validator.js';
import { verifyJWT } from '../middlewares/verifyJWT.middleware.js';
import { mongodbPathIdValidator } from '../validators/mongodb.validator.js';

const router = express.Router();

router.use(verifyJWT);
router
  .route('/')
  .get(getAllComments)
  .post(addCommentValidator(), validate, addComment);
router
  .route('/:commentId')
  .get(mongodbPathIdValidator('commentId'), validate, getCommentDetail)
  .delete(mongodbPathIdValidator('commentId'), validate, deleteComment)
  .patch(
    updateCommentValidator(),
    mongodbPathIdValidator('commentId'),
    validate,
    updateComment
  );

export default router;
