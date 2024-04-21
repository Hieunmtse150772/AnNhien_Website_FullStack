import mongoose, { Document, Schema } from 'mongoose';

interface IBuddhistBook extends Document {
  bookType: string;
  bookName: string;
  author: string;
}

const BuddhistBookSchema = new Schema<IBuddhistBook>({
  _id: Schema.Types.ObjectId,
  bookType: { type: String, required: true },
  bookName: { type: String, required: true },
  author: { type: String, required: true },
});

const BuddhistBookModel = mongoose.model<IBuddhistBook>('BuddhistBook', BuddhistBookSchema);

export { IBuddhistBook, BuddhistBookModel };
