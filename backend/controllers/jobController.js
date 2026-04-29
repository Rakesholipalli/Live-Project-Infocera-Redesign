const JobApplication = require('../models/JobApplication');

exports.submitApplication = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, jobPosition, coverLetter, skills, linkedin, portfolio, expectedSalary, noticePeriod } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !jobPosition) {
      return res.status(400).json({ error: 'Required fields missing' });
    }

    const application = new JobApplication({
      firstName,
      lastName,
      email,
      phone,
      jobPosition,
      coverLetter,
      skills: Array.isArray(skills) ? skills : skills?.split(',').map(s => s.trim()),
      linkedin,
      portfolio,
      expectedSalary,
      noticePeriod,
      status: 'applied'
    });

    // Handle file upload if provided
    if (req.file) {
      application.resume = {
        fileName: req.file.originalname,
        url: `/uploads/resumes/${req.file.filename}`,
        uploadedAt: new Date()
      };
    }

    await application.save();

    res.status(201).json({
      message: 'Job application submitted successfully',
      application
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllApplications = async (req, res) => {
  try {
    const applications = await JobApplication.find().sort({ appliedAt: -1 });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getApplicationById = async (req, res) => {
  try {
    const application = await JobApplication.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }
    res.json(application);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateApplicationStatus = async (req, res) => {
  try {
    const { status, reviewNotes, interviewDate } = req.body;
    const application = await JobApplication.findByIdAndUpdate(
      req.params.id,
      {
        status,
        reviewNotes,
        interviewDate,
        reviewedAt: new Date()
      },
      { new: true }
    );
    res.json(application);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getApplicationsByPosition = async (req, res) => {
  try {
    const { position } = req.params;
    const applications = await JobApplication.find({ jobPosition: position }).sort({ appliedAt: -1 });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
