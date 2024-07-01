import express from 'express';
import { validate } from '../validators/validate.validator.js';
import { mongodbPathIdValidator } from '../validators/mongodb.validator.js';
import { verifyJWT } from '../middlewares/verifyJWT.middleware.js';

const router = express.Router();

export default router;
