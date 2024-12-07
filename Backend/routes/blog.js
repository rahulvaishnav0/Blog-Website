const express = require('express');
const Blog = require('../models/Blog');
const router = express.Router();

// Create a new blog
router.post('/create', async (req, res) => {
  try {
    const { title, content ,author} = req.body;

    const newBlog = new Blog({ title, content,author });
    await newBlog.save();

    res.status(201).json({ success: true, blog: newBlog });
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get a single blog by ID
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update a blog
router.put('/:id', async (req, res) => {
  try {
    const { title, content,author } = req.body;
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, content,author },
      { new: true }
    );
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json({ success: true, blog });
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a blog
router.delete('/:id', async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json({ success: true, message: 'Blog deleted' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
