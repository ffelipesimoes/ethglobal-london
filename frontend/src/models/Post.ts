import mongoose, { Document, Schema, model } from "mongoose";

interface IPost extends Document {
  content: string;
  community: string;
  author: string;
  likes: number;
  createdAt: Date;
}

const PostSchema = new Schema<IPost>({
  content: { type: String, required: true },
  community: { type: String, default: "Barcelona", required: true },
  author: { type: String, default: "Simon", required: true },
  likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now, required: true },
});

// Check if the model exists before compiling it
const Post = mongoose.models.Post || model<IPost>("Post", PostSchema);

export default Post;
