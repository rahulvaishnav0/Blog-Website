import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BlogList() {
  const [blogs, setBlogs] = useState([]);

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

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center mb-6">All Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog._id} className="border p-4 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">{blog.title}</h3>
          <p>{blog.content.slice(0, 100)}...</p>
          <Link to={`/blog/${blog._id}`} className="text-blue-500 hover:underline">
            Read more
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
