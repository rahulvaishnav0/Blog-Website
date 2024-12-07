import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blog posts from backend API
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogs');
        setBlogs(response.data);  // Assume the response contains an array of blog posts
      } catch (err) {
        console.error('Error fetching blogs:', err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center mb-6">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="border p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-gray-600">{blog.content.slice(0, 100)}...</p>
            <a href={`/blog/${blog._id}`} className="text-blue-500 hover:underline">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;




