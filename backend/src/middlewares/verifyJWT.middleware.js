import jwt from 'jsonwebtoken';

import { User } from '../models/user.model.js';
import { apiError } from '../utils/apiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    let token;
    if (
      req.cookies?.accessToken ||
      (req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
    ) {
      token = req.cookies.accessToken || req.headers.authorization.split(' ')[1];
    }

    if (!token) return next(new apiError(401, 'invalid access token'));

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decoded._id).select(
      '-password -refreshToken -emailVerificationToken -emailVerificationExpiry'
    );
    if (!user) return next(new apiError(401, 'invalid access token'));

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    throw new apiError(401, error?.message || 'Invalid access token');
  }
});
