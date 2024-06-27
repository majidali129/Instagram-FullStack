import jwt from 'jsonwebtoken';

import { User } from '../models/user.model.js';
import { apiError } from '../utils/apiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const verifyJWT = asyncHandler(async (req, _, next) => {
  let token;
  if (req.cookies?.accessToken || req.headers.authorization.startsWith('Bearer')) {
    token =
      req.cookies.accessToken || req.headers.authorization.replace('Bearer ', '');
  }

  if (!token) return next(new apiError(401, 'invalid access token'));

  const decoded = await jwt.decode(token);

  const user = await User.findById(decoded._id).select('-password -refreshToken');
  if (!user) return next(new apiError(404, 'No user found for that ID'));

  req.user = user;
  next();
});
