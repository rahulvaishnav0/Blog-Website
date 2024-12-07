const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Handle contact form submissions
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create a new contact document
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error saving contact form data:', error);
    res.status(500).json({ success: false, message: 'Failed to send the message.' });
  }
});

module.exports = router;
