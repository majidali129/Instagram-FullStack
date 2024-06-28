import mongoose, { Schema } from 'mongoose';

const movieScheduleSchema = Schema(
  {
    movie: {
      type: Schema.Types.ObjectId,
      ref: 'Movie',
    },
    theater: {
      type: Schema.Types.ObjectId,
      ref: 'Theater',
    },
    showTimes: {
      type: [Date],
      default: [],
    },
  },
  { timestamps: true }
);

export const MovieSchedule = mongoose.model('MovieSchedule', movieScheduleSchema);
