import express from "express";
import {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
} from "../controller/noteController.js";
const router = express.Router();

// This code defines a set of routes for handling notes in an Express application.
// It includes routes for fetching, creating, updating, and deleting notes.
// Each route sends a response with a status code and a message in JSON format.
router.get("/", getAllNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
