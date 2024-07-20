import { asyncHandler } from '../utils/asyncHandler.js';
import { apiError } from '../utils/apiError.js';
import { apiResponse } from '../utils/apiResponse.js';
import { Comment } from '../models/comment.model.js';
import { Post } from '../models/posts.model.js';

const addComment = asyncHandler(async (req, res, next) => {
  const { text, postId } = req.body;
  console.log(postId);

  const createdComment = await Comment.create({
    text,
    user: req?.user._id,
  });
  if (!createdComment)
    return next(
      new apiError(
        500,
        'Oops! facing issue while creating new comment. try again later'
      )
    );

  const post = await Post.findById(postId);
  post?.comments.push(createdComment._id);
  await post.save({ validateBeforeSave: false });

  res
    .status(201)
    .json(new apiResponse(201, createdComment, 'Post created successfully'));
});

const updateComment = asyncHandler(async (req, res, next) => {
  const { text } = req.body;
  const updatedComment = await Comment.findByIdAndUpdate(
    req.params.commentId,
    {
      $set: {
        text,
      },
    },
    { new: true }
  );
  if (!updatedComment)
    return next(new apiError(404, 'No comment found for that ID'));

  res
    .status(200)
    .json(new apiResponse(200, updatedComment, 'Comment updated successfully'));
});

const deleteComment = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findByIdAndDelete(req.params.commentId);
  if (!comment)
    return next(
      new apiError(404, 'Comment not found that you are trying to delete.')
    );

  res
    .status(200)
    .json(new apiResponse(200, comment, 'Comment deleted successfully'));
});

const getAllComments = asyncHandler(async (req, res, next) => {
  const comments = await Comment.find();

  res
    .status(200)
    .json(
      new apiResponse(
        200,
        { results: comments.length, comments },
        'all comments fetched successfully'
      )
    );
});

const getCommentDetail = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findById(req.params.postId);
  if (!comment)
    return next(new apiError(404, 'Comment no longer exist for that ID'));

  res
    .status(200)
    .json(new apiResponse(200, comment, 'Comment fetched successfully'));
});

export {
  addComment,
  updateComment,
  deleteComment,
  getAllComments,
  getCommentDetail,
};
