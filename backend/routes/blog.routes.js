const express = require('express');
const router = express.Router();
const {
  createBlog,
  getAllBlogs,
  getBlogBySlug,
  updateBlog,
  publishBlog,
  addComment,
  deleteBlog
} = require('../controllers/blogController');
const { authenticate } = require('../middleware/auth');

// Public routes
router.get('/', getAllBlogs);
router.get('/slug/:slug', getBlogBySlug);
router.post('/:id/comments', addComment);

// Protected routes (authenticated users)
router.post('/', authenticate, createBlog);
router.patch('/:id', authenticate, updateBlog);
router.patch('/:id/publish', authenticate, publishBlog);
router.delete('/:id', authenticate, deleteBlog);

module.exports = router;
