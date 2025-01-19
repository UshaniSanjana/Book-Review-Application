import React, { useState, useEffect } from "react";
import BookList from "../components/BookList";
import { fetchBooks } from "../api";

const Home = () => {
  const [books, setBooks] = useState([]);

  const fetchData = async () => {
    const { data } = await fetchBooks();
    setBooks(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <BookList books={books} onDelete={fetchData} />
    </div>
  );
};

export default Home;
