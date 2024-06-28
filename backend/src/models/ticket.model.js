import mongoose, { Schema } from 'mongoose';

const ticketSchema = Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    movie: {
      type: Schema.Types.ObjectId,
      ref: 'Movie',
    },
    theater: {
      type: Schema.Types.ObjectId,
      ref: 'Theater',
    },
    showTime: Date,
    seates: [String],
  },
  { timestamps: true }
);

export const Ticket = mongoose.model('Ticket', ticketSchema);
