import { apiError } from '../utils/apiError.js';
import { apiResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { User } from '../models/user.model.js';
import { uploadToCloudinary } from '../utils/uploadToCloudinary.js';

const cookieOptions = {
  secure: true,
  httpOnly: true,
};

const generateAccessRefreshToken = async (userId) => {
  const user = await User.findById(userId);
  const accessToken = await user.generateAccessToken();
  const refreshToken = await user.generateRefreshToken();

  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  return { accessToken, refreshToken };
};

const registerUser = asyncHandler(async (req, res, next) => {
  const { email, name } = req.body;

  const existingUser = await User.findOne({
    $or: [{ email }, { name }],
  });

  if (existingUser)
    return next(new apiError(400, 'user with credentials already exists'));

  const userAvatarLocalPath = req?.file?.path;
  if (!userAvatarLocalPath)
    return next(new apiError(404, 'user avatar is required for profile purposes.'));

  const avatar = await uploadToCloudinary(userAvatarLocalPath);

  const newUser = await User.create({ ...req.body, avatar: avatar?.url });
  if (!newUser)
    return next(
      new apiError(
        500,
        'something went wrong while creating new user. try again later'
      )
    );

  newUser.password = undefined;
  res.status(201).json(new apiResponse(201, newUser, 'user created successfully'));
});

const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return next(new apiError(404, 'user not found. please signup first'));

  const isPasswordCorrect = await user.isPasswordCorrect(password, user.password);
  if (!isPasswordCorrect)
    return next(new apiError(400, 'email or password is invalid'));

  const { accessToken, refreshToken } = await generateAccessRefreshToken(user._id);
  user.password = undefined;
  user.refreshToken = undefined;

  res
    .status(200)
    .cookie('accessToken', accessToken, cookieOptions)
    .cookie('refreshToken', refreshToken, cookieOptions)
    .json(
      new apiResponse(200, { user, accessToken, refreshToken }, 'user logged In!!!')
    );
});

const resetPassword = asyncHandler(async (req, res, next) => {});

const updatePassword = asyncHandler(async (req, res, next) => {});

const updateProfile = asyncHandler(async (req, res, next) => {
  if (req.body.password)
    return next(
      new apiError(
        400,
        'here you are not allow to update password. please viset /users/update-password to update password accordingly'
      )
    );

  // TO UPDATE USER AVATAR
  const updatedUser = req.body;
  const newAvatarPath = req?.file.path;
  if (newAvatarPath) {
    const avatar = await uploadToCloudinary(newAvatarPath);
    updatedUser.avatar = avatar?.url;
  }

  const user = await User.findByIdAndUpdate(req.user._id, updatedUser, {
    new: true,
  }).select('-password -refreshToken');
  if (!user) return next(new apiError(404, 'no user found for that ID'));

  res.status(200).json(new apiResponse(200, user, 'profile updated successfully'));
});

const getMe = asyncHandler(async (req, res, next) => {
  res
    .status(200)
    .json(
      new apiResponse(200, req.user, 'current user profile fetched successfully')
    );
});
export {
  registerUser,
  loginUser,
  resetPassword,
  updatePassword,
  updateProfile,
  getMe,
};
