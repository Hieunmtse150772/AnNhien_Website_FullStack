import mongoose, { Document, Schema } from 'mongoose';

interface IPost extends Document {
  author: string;
  content: string;
  views: number;
  likes: number;
}

const PostSchema = new Schema<IPost>({
  author: String,
  content: String,
  views: Number,
  likes: Number,
});

const PostModel = mongoose.model<IPost>('Post', PostSchema);

export { IPost, PostModel };
