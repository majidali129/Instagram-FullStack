import { asyncHandler } from '../utils/asyncHandler.js';
import { apiError } from '../utils/apiError.js';
import { uploadToCloudinary } from '../utils/uploadToCloudinary.js';
import { apiResponse } from '../utils/apiResponse.js';
import { Post } from '../models/posts.model.js';
import { Comment } from '../models/comment.model.js';
import mongoose from 'mongoose';

const createPost = asyncHandler(async (req, res, next) => {
  const { caption } = req.body;

  const imageLocalPath = req?.file?.path;
  if (!imageLocalPath) return next(new apiError(200, 'image for post is mendatory'));
  const image = await uploadToCloudinary(imageLocalPath);

  const createdPost = await Post.create({
    caption,
    user: req?.user._id,
    image: image?.url,
  });
  if (!createdPost)
    return next(
      new apiError(
        500,
        'Oops! facing issue while creating new post. try again later'
      )
    );

  res
    .status(201)
    .json(new apiResponse(201, { post: createdPost }, 'Post created successfully'));
});

const updatePost = asyncHandler(async (req, res, next) => {
  const { caption } = req.body;
  const updatedPost = await Post.findByIdAndUpdate(
    req.params.postId,
    {
      $set: { caption },
    },
    { new: true }
  );

  if (!updatedPost) return next(new apiError(404, 'Post not found for that ID'));

  res
    .status(200)
    .json(new apiResponse(200, updatedPost, 'post updated successfully'));
});

const deletePost = asyncHandler(async (req, res, next) => {
  // delete all comments from collection related to this target post
  const comments = await Comment.deleteMany(
    {
      post: req.params.postId,
      user: req?.user._id,
    },
    { new: true }
  );
  // await comments.save({ validateBeforeSave: false });
  // now delete post
  const post = await Post.findByIdAndDelete(req.params.postId);
  if (!post)
    return next(new apiError(404, 'Post not found that you are trying to delete.'));

  res.status(200).json(new apiResponse(200, post, 'Post deleted successfully'));
});

const getAllPosts = asyncHandler(async (req, res, next) => {
  const posts = await Post.find();

  res
    .status(200)
    .json(
      new apiResponse(
        200,
        { results: posts.length, posts },
        'all posts fetched successfully'
      )
    );
});

const getPostDetails = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.postId)
    .populate('comments')
    .populate('likes');
  if (!post) return next(new apiError(404, 'Post no longer exist for that ID'));

  res.status(200).json(new apiResponse(200, post, 'Post fetched successfully'));
});

export { createPost, updatePost, deletePost, getAllPosts, getPostDetails };
