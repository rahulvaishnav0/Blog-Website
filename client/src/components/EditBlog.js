import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/blogs/${id}`);
        setTitle(res.data.title);
        setContent(res.data.content);
      } catch (error) {
        console.error('Error fetching blog:', error);
        alert('Failed to fetch blog.');
      }
    };
    fetchBlog();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        `http://localhost:5000/api/blogs/${id}`,
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('Blog updated successfully!');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error updating blog:', error);
      alert('Failed to update blog.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Edit Blog</h1>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={6}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;

