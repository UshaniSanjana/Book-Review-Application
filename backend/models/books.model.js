import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
  bookTitle: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  reviewText: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

const Book = mongoose.model("Book", booksSchema);

export default Book;
