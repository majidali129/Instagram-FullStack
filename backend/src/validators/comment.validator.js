import { body, param } from 'express-validator';
import mongoose from 'mongoose';

export const addCommentValidator = () => [
  body('text')
    .notEmpty()
    .isString()
    .withMessage('Comment text is required and must be a non-empty string.'),
];

export const updateCommentValidator = () => [
  body('text')
    .optional()
    .notEmpty()
    .isString()
    .withMessage('Comment text is required and must be a non-empty string.'),
];
