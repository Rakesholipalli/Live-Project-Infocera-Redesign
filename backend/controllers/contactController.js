const Contact = require('../models/Contact');

exports.submitContact = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, company, subject, message, service, budget, timeline } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !message) {
      return res.status(400).json({ error: 'Required fields missing' });
    }

    const contact = new Contact({
      firstName,
      lastName,
      email,
      phone,
      company,
      subject,
      message,
      service,
      budget,
      timeline,
      status: 'new'
    });

    await contact.save();

    res.status(201).json({
      message: 'Contact form submitted successfully',
      contact
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateContactStatus = async (req, res) => {
  try {
    const { status, responseNote } = req.body;
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        status,
        responseNote,
        respondedAt: new Date()
      },
      { new: true }
    );
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
