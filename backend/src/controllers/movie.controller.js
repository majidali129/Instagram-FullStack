import { asyncHandler } from '../utils/asyncHandler.js';
import { Movie } from '../models/movie.model.js';

const createMovie = asyncHandler(async (req, res, next) => {});
const updateMovie = asyncHandler(async (req, res, next) => {});
const deleteMovie = asyncHandler(async (req, res, next) => {});
const getAllMovies = asyncHandler(async (req, res, next) => {});
const getMovieDetails = asyncHandler(async (req, res, next) => {});

export { createMovie, updateMovie, deleteMovie, getAllMovies, getMovieDetails };
