import express from 'express';
import { validate } from '../validators/validate.validator.js';
import { mongodbPathIdValidator } from '../validators/mongodb.validator.js';
import { createMovieValidationRules } from '../validators/movie.validator.js';
import { updateMovieValidationRules } from '../validators/movie.validator.js';
import { verifyJWT } from '../middlewares/verifyJWT.middleware.js';
import {
  createMovie,
  updateMovie,
  deleteMovie,
  getAllMovies,
  getMovieDetails,
} from '../controllers/movie.controller.js';

const router = express.Router();

// USER => AS VISITORS
router.route('/').get(getAllMovies);
router
  .route('/:movieId')
  .get(mongodbPathIdValidator('movieId'), validate, getMovieDetails);

// SECURE ROUTES

// USER => AS ADMIN
router.route('/').post(createMovieValidationRules(), validate, createMovie);
router
  .route('/:movieId')
  .patch(
    updateMovieValidationRules(),
    mongodbPathIdValidator('movieId'),
    validate,
    updateMovie
  )
  .delete(mongodbPathIdValidator('movieId'), validate, deleteMovie);

export default router;
