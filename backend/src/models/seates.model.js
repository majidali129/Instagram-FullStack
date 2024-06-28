import mongoose, { Schema } from 'mongoose';

const seatSchema = Schema(
  {
    seatNumber: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
    },
    theaterId: {
      type: Schema.Types.ObjectId,
      ref: 'Theater',
    },
    isAvailable: Boolean,
  },
  { timestamps: true }
);

export const Seat = mongoose.model('Seat', seatSchema);
