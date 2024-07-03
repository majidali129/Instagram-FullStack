import express from 'express';

import { verifyJWT } from '../middlewares/verifyJWT.middleware.js';
import {
  getAllPostsByFollowers,
  toggleFollowUser,
} from '../controllers/feed.controller.js';

const router = express.Router();

router.use(verifyJWT);
router.route('/').get(getAllPostsByFollowers);
router.route('/toggle-follow-user').post(toggleFollowUser);

export default router;
