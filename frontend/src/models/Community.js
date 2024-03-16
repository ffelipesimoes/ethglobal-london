// models/Community.js

import mongoose from 'mongoose';
const { Schema } = mongoose;

const communitySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }]
});

export default mongoose.models.Community || mongoose.model('Community', communitySchema);
