import mongoose, { Schema } from 'mongoose';

const LikeSchema = Schema(
  {
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestampa: true }
);

export const Like = mongoose.model('Like', LikeSchema);
