import React, { useState } from "react";
import BookCard from "./BookCard";

const BookList = ({ books, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("none");

  const filteredBooks = books.filter(
    (book) =>
      book.bookTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.rating - b.rating;
    } else if (sortOrder === "desc") {
      return b.rating - a.rating;
    } else {
      return 0;
    }
  });

  return (
    <div className="book-cards-container">
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "0.75rem",
          marginBottom: "1rem",
          border: "1px solid #ddd",
          borderRadius: "5px",
        }}
      />

      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        style={{
          width: "100%",
          padding: "0.75rem",
          marginBottom: "1rem",
          border: "1px solid #ddd",
          borderRadius: "5px",
        }}
      >
        <option value="none">Sort by Rating</option>
        <option value="asc">Lowest to Highest</option>
        <option value="desc">Highest to Lowest</option>
      </select>

      {sortedBooks.map((book) => (
        <BookCard key={book._id} book={book} onDelete={onDelete} />
      ))}

      {sortedBooks.length === 0 && <p>No books found.</p>}
    </div>
  );
};

export default BookList;
