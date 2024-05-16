import { Document } from "mongodb";

export interface IBuddhistBook extends Document {
    bookName: string;
    bookType: string;
    title: string;
    author: string | Array<string>;
    file: string,
    bookCoverImage: string;
    createdAt?: string;
    updatedAt?: string;
    cloudinary_id?: { required: false, type: String },
}
