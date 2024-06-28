import mongoose, { Schema } from 'mongoose';

const theaterSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    location: {
      type: String,
      required: true,
      lowercase: true,
      index: true,
    },
    seatingCapacity: {
      type: Number,
      required: true,
      default: 0,
    },
    seates: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Seat',
      },
    ],
  },
  { timestamps: true }
);

export const Theater = mongoose.model('Theater', theaterSchema);
