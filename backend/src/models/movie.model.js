import mongoose, { Schema } from 'mongoose';

const movieSchema = Schema(
  {
    title: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },
    description: String,
    genre: {
      type: [String],
      required: true,
      default: [],
    },
    actors: {
      type: [String],
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    releasedDate: {
      type: Date,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    coverImage: String,
  },
  { timestamps: true }
);

export const Movie = mongoose.model('Movie', movieSchema);
