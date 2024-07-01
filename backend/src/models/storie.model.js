import mongoose, { Schema } from 'mongoose';

const StorySchema = new Schema(
  {
    storyId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Story = mongoose.model('Story', StorySchema);
