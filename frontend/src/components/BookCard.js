import React from "react";
import { Link } from "react-router-dom";
import { deleteBook } from "../api";

const BookCard = ({ book, onDelete }) => {
  const handleDelete = async () => {
    await deleteBook(book._id);
    onDelete();
  };

  return (
    <div className="book-card">
      <h3>{book.bookTitle}</h3>
      <p>Author: {book.author}</p>
      <p>Rating: {book.rating}</p>
      <p>{book.reviewText}</p>
      <p>Added on: {new Date(book.dateAdded).toLocaleDateString()}</p>
      <div>
        <Link to={`/edit/${book._id}`} className="edit-link">
          Edit Review
        </Link>
      </div>
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default BookCard;
