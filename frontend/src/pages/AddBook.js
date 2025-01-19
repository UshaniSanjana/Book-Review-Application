import React from "react";
import BookForm from "../components/BookForm";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Add a New Book Review</h2>
      <BookForm onSubmit={() => navigate("/")} />
    </div>
  );
};

export default AddBook;
