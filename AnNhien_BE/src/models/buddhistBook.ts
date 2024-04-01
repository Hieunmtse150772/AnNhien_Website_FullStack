import mongoose, { Document, Schema } from 'mongoose';

interface IBuddhistBook extends Document {
  // bookId: string;
  bookType: string;
  bookName: string;
  author: string;
}

const BuddhistBookSchema = new Schema<IBuddhistBook>({
  // bookId: {type: String, required: false},
  bookType: String,
  bookName: String,
  author: String,
});

const BuddhistBookModel = mongoose.model<IBuddhistBook>('BuddhistBook', BuddhistBookSchema);

export { IBuddhistBook, BuddhistBookModel };
