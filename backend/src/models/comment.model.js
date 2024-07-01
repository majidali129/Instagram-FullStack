import mongoose, { Schema } from 'mongoose';

const commentSchima = Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Comment = mongoose.model('Comment', commentSchima);
