const express = require('express');
const router = express.Router();
const {
  submitContact,
  getAllContacts,
  getContactById,
  updateContactStatus,
  deleteContact
} = require('../controllers/contactController');
const { authenticate } = require('../middleware/auth');

// Public route
router.post('/', submitContact);

// Protected routes (admin only)
router.get('/', authenticate, getAllContacts);
router.get('/:id', authenticate, getContactById);
router.patch('/:id', authenticate, updateContactStatus);
router.delete('/:id', authenticate, deleteContact);

module.exports = router;
