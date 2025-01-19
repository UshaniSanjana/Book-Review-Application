import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3500/api/books" });

export const fetchBooks = () => API.get("/");
export const createBook = (newBook) => API.post("/", newBook);
export const updateBook = (id, updatedBook) => API.put(`/${id}`, updatedBook);
export const deleteBook = (id) => API.delete(`/${id}`);
