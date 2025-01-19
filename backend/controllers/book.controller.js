import mongoose from "mongoose";
import Book from "../models/books.model.js";

export const createBookReview = async (req, res) => {
  const book = req.body;
  if (!book.bookTitle || !book.author || !book.rating || !book.reviewText) {
    return res.status(400).json({
      success: false,
      message: "Please provide all fields",
    });
  }

  const newBook = new Book(book);

  try {
    await newBook.save();
    res.status(201).json({
      success: true,
      data: newBook,
    });
  } catch (error) {
    console.log("Error", error.message);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getBookReview = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({
      success: true,
      data: books,
    });
  } catch (error) {
    console.log("Error fetching data from the server", error.message);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const deleteBookReview = async (req, res) => {
  const { id } = req.params;
  console.log("id: ", id);

  try {
    await Book.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Book review deleted",
    });
  } catch (error) {
    console.log("Error deleting", error.message);
    res.status(404).json({
      success: false,
      message: "Not found",
    });
  }
};

export const updateBookReview = async (req, res) => {
  const { id } = req.params;
  const book = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ success: false, message: "Book review not found" });
  }

  try {
    const updatedBook = await Book.findByIdAndUpdate(id, book, { new: true });
    res.status(200).json({
      success: true,
      message: "Book review updated",
    });
  } catch (error) {
    console.log("Error updating", error.message);
    res.status(404).json({
      success: false,
      message: "Not found",
    });
  }
};
