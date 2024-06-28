import { body, param } from 'express-validator';

export const mongodbBodyIdValidator = (idName) => {
  return [
    body(idName)
      .trim()
      .notEmpty()
      .withMessage('target ID is required')
      .isMongoId()
      .withMessage(`Invalid ID ${idName}`),
  ];
};

export const mongodbPathIdValidator = (idName) => {
  return [
    param(idName)
      .trim()
      .notEmpty()
      .withMessage('target ID is required')
      .isMongoId()
      .withMessage(`Invalid ID ${idName}`),
  ];
};
