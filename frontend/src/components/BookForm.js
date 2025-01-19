import React, { useState, useEffect } from "react";
import { createBook, updateBook, fetchBooks } from "../api";

const BookForm = ({ currentBookId, onSubmit }) => {
  const [book, setBook] = useState({
    bookTitle: "",
    author: "",
    rating: "",
    reviewText: "",
  });

  useEffect(() => {
    const fetchBookDetails = async () => {
      if (currentBookId) {
        const { data } = await fetchBooks();
        const selectedBook = data.data.find((b) => b._id === currentBookId);
        if (selectedBook) setBook(selectedBook);
      }
    };
    fetchBookDetails();
  }, [currentBookId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentBookId) {
      await updateBook(currentBookId, book);
    } else {
      await createBook(book);
    }
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="bookTitle"
        value={book.bookTitle}
        onChange={handleChange}
        placeholder="Book Title"
        required
      />
      <input
        name="author"
        value={book.author}
        onChange={handleChange}
        placeholder="Author"
        required
      />
      <input
        type="number"
        name="rating"
        value={book.rating}
        onChange={handleChange}
        placeholder="Rating (1-5)"
        min="1"
        max="5"
        required
      />
      <textarea
        name="reviewText"
        value={book.reviewText}
        onChange={handleChange}
        placeholder="Your Review"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookForm;
