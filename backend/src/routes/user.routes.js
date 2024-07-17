import express from 'express';

import {
  loginUserValidator,
  registerUserValidator,
  userChangeCurrentPasswordValidator,
  userForgotPasswordValidator,
  userResetForgottenPasswordValidator,
} from '../validators/user-validator.js';
import {
  changeCurrentPassword,
  forgotPassword,
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
  resendEmailVerification,
  resetForgottenPassword,
  updateProfile,
  verifyEmail,
} from '../controllers/auth.controller.js';
import { upload } from '../middlewares/multer.middleware.js';
import { verifyJWT } from '../middlewares/verifyJWT.middleware.js';
import { validate } from '../validators/validate.validator.js';

const router = express.Router();

router
  .route('/')
  .post(upload.single('avatar'), registerUserValidator(), validate, registerUser);

router.route('/login').post(loginUserValidator, validate, loginUser);
// router.route('/refresh-token').post(loginUserValidator, validate, loginUser);
router.route('/verify-email/:verificationToken').get(verifyEmail);

router
  .route('/forgot-password')
  .post(userForgotPasswordValidator(), validate, forgotPassword);
router
  .route('/reset-password/:resetToken')
  .post(userResetForgottenPasswordValidator(), validate, resetForgottenPassword);

// SECURE ROUTES ------------------------------ START-------------
router.use(verifyJWT);

router.route('/logout').post(logoutUser);
router.route('/update-profile').patch(updateProfile);
router.route('/current-user').get(getCurrentUser);
router
  .route('/change-password')
  .post(userChangeCurrentPasswordValidator(), validate, changeCurrentPassword);
router.route('/resend-email-verification').post(resendEmailVerification);

// router.route('/toggle-follow-user').post(toggleFollowUser);

export default router;
