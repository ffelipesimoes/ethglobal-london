import mongoose, { Document, Schema, model } from "mongoose";

interface ICommunity extends Document {
  image: string;
  description: string;
  name: string;
  members: number;
}

const CommunitySchema = new Schema<ICommunity>({
  image: { type: String, required: true },
  description: { type: String, required: true },
  name: { type: String, required: true },
  members: { type: Number, default: 0 },
});

const Community = mongoose.models.Community || model<ICommunity>("Community", CommunitySchema);

export default Community;
