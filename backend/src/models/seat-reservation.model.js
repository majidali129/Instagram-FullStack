import mongoose, { Schema } from 'mongoose';

const reservedSeatSchema = Schema(
  {
    movie: {
      type: Schema.Types.ObjectId,
      ref: 'Movie',
      required: true,
    },
    theater: {
      type: Schema.Types.ObjectId,
      ref: 'Movie',
      required: true,
    },
    showTime: {
      type: Date,
      required: true,
    },
    seates: [
      {
        seat: {
          value: Schema.Types.ObjectId,
          ref: 'Seat',
        },
        isReserved: {
          type: Boolean,
          required: true,
        },
        reservedBy: {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      },
    ],
  },
  { timestamps: true }
);

// Indexes to improve query performance
reservedSeatSchema.index({ movie: 1, theater: 1, showTime: 1 });
reservedSeatSchema.index({ 'seats.seat': 1, 'seats.isReserved': 1 });

export const ReservedSeat = mongoose.model('ReservedSeat', reservedSeatSchema);
