import { body } from 'express-validator';

export const createPostValidator = () => {
  //   return [body('caption').notEmpty().withMessage('Caption for post is required')];
  return [
    body('caption')
      .notEmpty()
      .withMessage('Caption is required')
      .isString()
      .withMessage('Caption must be a string'),
  ];
};

export const updatePostValidator = () => {
  //   return [body('caption').optional().withMessage('Caption for post is required')];
  return [
    body('user').optional().isMongoId().withMessage('Invalid user ID'),
    body('image').optional().isURL().withMessage('Invalid image URL'),
    body('caption').optional().isString().withMessage('Caption must be a string'),
    body('likes')
      .optional()
      .isArray()
      .withMessage('Likes must be an array of user IDs'),
    body('comments')
      .optional()
      .isArray()
      .withMessage('Comments must be an array of comment IDs'),
  ];
};
