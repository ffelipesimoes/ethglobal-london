// models/Post.js

import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  community: {
    type: Schema.Types.ObjectId,
    ref: 'Community',
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  },
  likes: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

export default mongoose.models.Post || mongoose.model('Post', postSchema);
