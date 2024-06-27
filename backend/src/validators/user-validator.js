import { body } from 'express-validator';

export const registerUserValidator = [
  body('name')
    .isString()
    .notEmpty()
    .trim()
    .withMessage('user name is required')
    .isLength({ min: 6, max: 15 })
    .withMessage('user name must be equal or grater than 6 characters'),
  body('email')
    .isString()
    .notEmpty()
    .trim()
    .withMessage('email is required')
    .isEmail()
    .withMessage('please enter a valid email address'),
  body('password').isString().notEmpty().withMessage('password is required'),
  body('avatar').isString().notEmpty().trim().withMessage('avatar is required'),
];

export const loginUserValidator = [
  body('email')
    .isString()
    .notEmpty()
    .trim()
    .withMessage('email is required')
    .isEmail()
    .withMessage('please enter a valid email address'),
  body('password').isString().notEmpty().trim().withMessage('password is required'),
];
