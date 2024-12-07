import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blogs/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      navigate('/'); // Redirect to homepage after deletion
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold mb-4">{blog.title}</h2>
      <p>{blog.content}</p>

      <div className="mt-4">
        <button
          onClick={() => navigate(`/edit/${id}`)}
          className="py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Edit Blog
        </button>
        <button
          onClick={handleDelete}
          className="ml-4 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete Blog
        </button>
      </div>
    </div>
  );
}

export default BlogDetail;
