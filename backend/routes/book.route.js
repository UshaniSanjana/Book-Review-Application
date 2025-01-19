import express from "express";
import { createBookReview } from "../controllers/book.controller.js";
import { getBookReview } from "../controllers/book.controller.js";
import { deleteBookReview } from "../controllers/book.controller.js";
import { updateBookReview } from "../controllers/book.controller.js";

const router = express.Router();

router.post("/", createBookReview);

router.get("/", getBookReview);

router.delete("/:id", deleteBookReview);

router.put("/:id", updateBookReview);

export default router;
