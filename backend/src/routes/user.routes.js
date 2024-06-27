import express from 'express';
import {
  loginUserValidator,
  registerUserValidator,
} from '../validators/user-validator.js';
import {
  getMe,
  loginUser,
  registerUser,
  resetPassword,
  updatePassword,
  updateProfile,
} from '../controllers/auth.controller.js';
import { upload } from '../middlewares/multer.middleware.js';
import { verifyJWT } from '../middlewares/verifyJWT.middleware.js';

const router = express.Router();

router
  .route('/register')
  .post(registerUserValidator, upload.single('avatar'), registerUser);
router.route('/login').post(loginUserValidator, loginUser);

router.use(verifyJWT);

router.route('/reset-password', resetPassword);
router.route('/update-password', updatePassword);
router.route('/update-profile').patch(updateProfile);
router.route('/me').get(getMe);

export default router;
