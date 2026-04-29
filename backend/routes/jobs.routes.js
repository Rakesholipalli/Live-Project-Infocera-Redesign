const express = require('express');
const router = express.Router();
const {
  submitApplication,
  getAllApplications,
  getApplicationById,
  updateApplicationStatus,
  getApplicationsByPosition
} = require('../controllers/jobController');
const { authenticate } = require('../middleware/auth');

// Public route
router.post('/', submitApplication);

// Protected routes (admin only)
router.get('/', authenticate, getAllApplications);
router.get('/:id', authenticate, getApplicationById);
router.get('/position/:position', authenticate, getApplicationsByPosition);
router.patch('/:id', authenticate, updateApplicationStatus);

module.exports = router;
