import mongoose, { Schema } from 'mongoose';

const NotificationSchema = Schema({
  recipientId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  senderId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  type: {
    type: String,
    enum: ['like', 'comment', 'follow'],
    required: true,
  },
  postId: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: false,
  },
  isRead: {
    type: Boolean,
    default: false,
    index: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Notification = mongoose.model('Notification', NotificationSchema);
