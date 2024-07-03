import { asyncHandler } from '../utils/asyncHandler.js';
import { apiError } from '../utils/apiError.js';
import { uploadToCloudinary } from '../utils/uploadToCloudinary.js';
import { apiResponse } from '../utils/apiResponse.js';
import { Post } from '../models/posts.model.js';
import { Comment } from '../models/comment.model.js';
import { Like } from '../models/like.model.js';

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

const togglePostLike = asyncHandler(async (req, res, next) => {
  const { postId } = req.body;
  let message;

  const post = await Post.findById(postId);
  if (!post) return next(new apiError(404, 'post not found for that ID'));

  const likedPost = await Like.findOne({
    post: postId,
    user: req.user._id,
  });

  if (likedPost) {
    await Like.findByIdAndDelete(likedPost._id);
    message = 'Post unliked successfully';
    post.likes.splice(post.likes.indexOf(likedPost._id));
  } else {
    const like = await Like.create({ post: postId, user: req.user._id });
    message = 'Post liked successfully';
    post.likes.push(like._id);
  }

  await post.save();

  res.status(201).json(new apiResponse(201, null, message));
});

const getAllPostsByUser = asyncHandler(async (req, res, next) => {
  const likedPosts = await Like.find({
    user: req.user._id,
  })
    .populate('post')
    .populate({
      path: 'user',
      select: '_id username fullName email image',
    });

  const createdPosts = await Post.find({
    user: req.user._id,
  }).populate('user');

  if (!likedPosts.length)
    return next(new apiError(404, "This user have'nt liked any post yet"));

  res.status(200).json(
    new apiResponse(
      200,
      {
        totalLikedPosts: likedPosts.length,
        likedPosts,
        userOwnPosts: createdPosts.length,
        createdPosts,
      },
      'All posts liked by this user fetched successfully'
    )
  );
});

export {
  createPost,
  updatePost,
  deletePost,
  getAllPosts,
  getPostDetails,
  togglePostLike,
  getAllPostsByUser,
};
