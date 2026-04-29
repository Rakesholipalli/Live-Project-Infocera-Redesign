const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required']
  },
  company: String,
  subject: String,
  message: {
    type: String,
    required: [true, 'Message is required']
  },
  service: String,
  budget: String,
  timeline: String,
  status: {
    type: String,
    enum: ['new', 'viewed', 'responded', 'closed'],
    default: 'new'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  responseNote: String,
  respondedAt: Date
});

module.exports = mongoose.model('Contact', contactSchema);
