import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/blogs/create', { title, content,author });
      if (response.data.success) {
        navigate('/'); // Redirect to homepage after successful creation
      }
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded"
            rows="5"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
          Create Blog
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;
