import { asyncHandler } from '../utils/asyncHandler.js';
import { apiError } from '../utils/apiError.js';
import { apiResponse } from '../utils/apiResponse.js';
import { Post } from '../models/posts.model.js';
import { User } from '../models/user.model.js';

const getAllPostsByFollowers = asyncHandler(async (req, res, next) => {
  const user = req.user;
  const posts = await Post.find({
    user: {
      $in: user?.followers,
    },
  });
  res
    .status(200)
    .json(
      new apiResponse(
        200,
        { results: posts.length, posts },
        'all posts of followers fetched successfully'
      )
    );
});

const toggleFollowUser = asyncHandler(async (req, res, next) => {
  const { postCreator, follower } = req.body; // postCreator will be userId, as follower as well
  let message;
  if (!postCreator)
    return next(new apiError(400, 'The id for post owner is required'));

  const postOwner = await User.findById(postCreator).select('-password');

  if (!postOwner) return next(new apiError(404, 'Post creator no longer exists'));
  const isFollowedByNewFollower = postOwner.followers.includes(follower);
  if (isFollowedByNewFollower) {
    postOwner.followers.splice(postOwner.followers.indexOf(follower), 1);
    message = 'User unfollowed done successfully';
  } else {
    postOwner.followers.push(follower);
    message = 'Following user has been done';
  }
  await postOwner.save();

  res
    .status(200)
    .json(
      new apiResponse(
        200,
        { postOwner },
        'All posts of followers fetched successfully'
      )
    );
});

export { getAllPostsByFollowers, toggleFollowUser };
