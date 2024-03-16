// models/Author.js

import mongoose from 'mongoose';
const { Schema } = mongoose;

const authorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  walletAddress: {
    type: String,
    required: true
  },
  totalLikes: {
    type: Number,
    default: 0
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }]
}, { timestamps: true });

authorSchema.virtual('totalScore').get(function() {
  // Assuming a simple score where each post counts as 1 point and each like as 1 point
  return this.totalLikes + this.posts.length;
});


export default mongoose.models.Author || mongoose.model('Author', authorSchema);
