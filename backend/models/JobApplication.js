const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
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
  jobPosition: {
    type: String,
    required: [true, 'Job position is required']
  },
  resume: {
    fileName: String,
    url: String,
    uploadedAt: Date
  },
  coverLetter: String,
  experience: String,
  skills: [String],
  linkedin: String,
  portfolio: String,
  expectedSalary: String,
  noticePeriod: String,
  status: {
    type: String,
    enum: ['applied', 'reviewed', 'shortlisted', 'rejected', 'accepted'],
    default: 'applied'
  },
  appliedAt: {
    type: Date,
    default: Date.now
  },
  reviewedAt: Date,
  reviewNotes: String,
  interviewDate: Date
});

module.exports = mongoose.model('JobApplication', jobApplicationSchema);
