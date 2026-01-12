/**
 * Comment Routes
 * 
 * @module routes/api/comments
 * @requires express
 * @requires mongoose
 * 
 * @description Handles HTTP requests for comment operations
 */

/**
 * GET /api/comments
 * Retrieves all comments from the database
 * 
 * @async
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<void>} JSON array of comments or error message
 * @throws {Error} Returns 500 status with error message if fetch fails
 */

/**
 * DELETE /api/comments/:id
 * Deletes a comment by its ID
 * 
 * @async
 * @function
 * @param {Object} req - Express request object
 * @param {string} req.params.id - The comment ID to delete
 * @param {Object} res - Express response object
 * @returns {Promise<void>} JSON success message or error message
 * @throws {Error} Returns 500 status with error message if deletion fails
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});
// add another endpoint for deleting an endpoint
router.delete("/:id", async (req, res) => {
  try {
    const commentId = req.params.id;
    await Comment.findByIdAndDelete(commentId);
    res.json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
});