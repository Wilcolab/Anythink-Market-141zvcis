/**
 * Comments API Routes
 * @module routes/api/comments
 * @requires express
 * @requires mongoose
 */

/**
 * Retrieves all comments from the database
 * @route GET /
 * @returns {Object[]} Array of comment objects
 * @returns {number} 500 - Failed to fetch comments
 * @async
 */

/**
 * Deletes a comment by its ID
 * @route DELETE /:id
 * @param {string} id - The comment ID to delete
 * @returns {Object} Success message confirming deletion
 * @returns {number} 500 - Failed to delete comment
 * @async
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
// Hey Github Copilot 
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});
// add another endpoint for deleting the comment 
router.delete("/:id", async (req, res) => {
  try {
    const commentId = req.params.id;
    await Comment.findByIdAndDelete(commentId);
    res.json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
});