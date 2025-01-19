import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookForm from "../components/BookForm";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Edit Book Review</h2>
      <BookForm currentBookId={id} onSubmit={() => navigate("/")} />
    </div>
  );
};

export default EditBook;
