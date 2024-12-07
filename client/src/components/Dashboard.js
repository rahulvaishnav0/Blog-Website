import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  // Fetch all blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  // Handle delete blog
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      setBlogs(blogs.filter((blog) => blog._id !== id)); // Update UI after deletion
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-center">Dashboard</h1>
      <div className="text-right">
        <Link
          to="/create"
          className="inline-block py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 mx-3"
        >
          Create New Blog
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="border p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-gray-600">{blog.content.slice(0, 100)}...</p>
            <div className="flex justify-between items-center mt-4">
              <Link
                to={`/edit/${blog._id}`}
                className="text-yellow-500 hover:underline"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(blog._id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
