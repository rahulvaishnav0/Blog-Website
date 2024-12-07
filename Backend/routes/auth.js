const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Assuming you have a User model for storing users
const router = express.Router();


// Register Route
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
  
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please fill in all fields.' });
    }
  
    try {
      
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user object
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
  
    } catch (error) {
      console.error('Registration Error:', error);
      res.status(500).json({ message: 'Server error. Please try again later.' });
    }
  });


// Login Route
router.post('/login',  async (req, res) => {
    const { email, password } = req.body;
  
    // Input validation
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide both email and password.' });
    }
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password.' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid password.' });
      }
  
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      res.status(200).json({
        success: true,
        message: 'Login successfully',
        token,
      });
    } catch (error) {
      console.error('Login Error:', error);
      res.status(500).json({ message: 'Server error. Please try again later.' });
    }
  });


  const authenticate = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Extract token from headers
  
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid token' });
      }
  
      req.user = decoded; 
      next(); 
    });
  };
  
  // Example of a protected route
  router.get('/profile', authenticate, (req, res) => {
    res.status(200).json({ message: 'Welcome to your profile', user: req.user });
  });
  
module.exports = router;
