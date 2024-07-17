import { body } from 'express-validator';

export const registerUserValidator = () => [
  body('username')
    .notEmpty()
    .trim()
    .withMessage('user name is required')
    .isLength({ min: 8, max: 15 })
    .withMessage(
      'user name must be equal or grater than 8 characters and less than 15 characters'
    ),
  body('fullName').notEmpty().trim().withMessage('full name is required'),
  body('email')
    .notEmpty()
    .trim()
    .withMessage('email is required')
    .isEmail()
    .withMessage('please enter a valid email address'),
  body('password').isString().notEmpty().withMessage('password is required'),
];

export const loginUserValidator = [
  body('username')
    .optional()
    .notEmpty()
    .trim()
    .withMessage('user name is required')
    .isLength({ min: 8, max: 15 })
    .withMessage(
      'user name must be equal or grater than 8 characters and less than 15 characters'
    ),
  body('email')
    .optional()
    .notEmpty()
    .trim()
    .withMessage('email is required')
    .isEmail()
    .withMessage('please enter a valid email address'),
  body('password').optional().notEmpty().trim().withMessage('password is required'),
];

export const userChangeCurrentPasswordValidator = () => {
  return [
    body('oldPassword').notEmpty().withMessage('Old password is required'),
    body('newPassword').notEmpty().withMessage('New password is required'),
  ];
};

export const userForgotPasswordValidator = () => {
  return [
    body('email')
      .notEmpty()
      .withMessage('Email is required')
      .isEmail()
      .withMessage('Email is invalid'),
  ];
};

export const userResetForgottenPasswordValidator = () => {
  return [body('newPassword').notEmpty().withMessage('Password is required')];
};
