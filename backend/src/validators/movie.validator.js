import { body } from 'express-validator';

export const createMovieValidationRules = () => {
  return [
    body('title')
      .notEmpty()
      .withMessage('Title is required')
      .trim()
      .isString()
      .withMessage('Title must be a string'),

    body('description')
      .optional()
      .isString()
      .withMessage('Description must be a string'),

    body('genre')
      .notEmpty()
      .withMessage('At least one genre is required')
      .isArray()
      .withMessage('Genre must be an array of strings')
      .custom((value) => value.every((item) => typeof item === 'string'))
      .withMessage('Genre array must contain only strings'),

    body('actors')
      .notEmpty()
      .withMessage('At least one actor is required')
      .isArray()
      .withMessage('Actors must be an array of strings')
      .custom((value) => value.every((item) => typeof item === 'string'))
      .withMessage('Actors array must contain only strings'),

    body('duration')
      .notEmpty()
      .withMessage('Duration is required')
      .isNumeric()
      .withMessage('Duration must be a number'),

    body('releasedDate')
      .notEmpty()
      .withMessage('Release date is required')
      .isDate()
      .withMessage('Release date must be a valid date'),

    body('rating')
      .optional()
      .isNumeric()
      .withMessage('Rating must be a number')
      .toFloat()
      .custom((value) => value >= 0 && value <= 5)
      .withMessage('Rating must be between 0 and 5'),

    body('coverImage')
      .optional()
      .isString()
      .withMessage('Cover image must be a string'),
  ];
};

export const updateMovieValidationRules = () => {
  return [
    body('title').optional().trim().isString().withMessage('Title must be a string'),

    body('description')
      .optional()
      .isString()
      .withMessage('Description must be a string'),

    body('genre')
      .optional()
      .isArray()
      .withMessage('Genre must be an array of strings')
      .custom((value) => value.every((item) => typeof item === 'string'))
      .withMessage('Genre array must contain only strings'),

    body('actors')
      .optional()
      .isArray()
      .withMessage('Actors must be an array of strings')
      .custom((value) => value.every((item) => typeof item === 'string'))
      .withMessage('Actors array must contain only strings'),

    body('duration').optional().isNumeric().withMessage('Duration must be a number'),

    body('releasedDate')
      .optional()
      .isDate()
      .withMessage('Release date must be a valid date'),

    body('rating')
      .optional()
      .isNumeric()
      .withMessage('Rating must be a number')
      .toFloat()
      .custom((value) => value >= 0 && value <= 5)
      .withMessage('Rating must be between 0 and 5'),

    body('coverImage')
      .optional()
      .isString()
      .withMessage('Cover image must be a string'),
  ];
};
