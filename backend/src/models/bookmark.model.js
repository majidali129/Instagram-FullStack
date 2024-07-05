import mongoose, { Schema } from 'mongoose';

const BookmarkSchema = Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        default: [],
      },
    ],
  },
  { timestamps: true }
);

export const Bookmark = mongoose.model('Bookmark', BookmarkSchema);
