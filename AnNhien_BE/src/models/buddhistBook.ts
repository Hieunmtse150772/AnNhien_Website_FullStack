import { IBuddhistBook } from '@src/interfaces/BuddhistBook';
import mongoose, { Document, Schema } from 'mongoose';


const BuddhistBookSchema = new Schema<IBuddhistBook>({
  _id: Schema.Types.ObjectId,
  bookType: { required: true, type: String },
  bookName: { required: true, type: String },
  author: { required: true, type: String },
  file: { required: true, type: String },
  bookCoverImage: { required: true, type: String },
  createdAt: { required: false, type: String },
  updatedAt: { required: false, type: String },
  cloudinary_id: { required: false, type: String },
});

const BuddhistBookModel = mongoose.model<IBuddhistBook>('BuddhistBook', BuddhistBookSchema);

export { IBuddhistBook, BuddhistBookModel };
