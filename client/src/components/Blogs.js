import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: '', content: '', author: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/api/blogs')
      .then(res => setBlogs(res.data))
      .catch(err => console.error('Error fetching blogs', err));
  }, []);

  const handleBlogSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/blogs', newBlog, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then(res => {
        setBlogs([...blogs, res.data]);
        setNewBlog({ title: '', content: '', author: '' });
      })
      .catch(err => console.error('Error creating blog', err));
  };

  return (
    <div>
      <h2>Blogs</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog._id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <small>{blog.author}</small>
          </li>
        ))}
      </ul>
      <form onSubmit={handleBlogSubmit}>
        <input type="text" placeholder="Title" value={newBlog.title} onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })} />
        <textarea placeholder="Content" value={newBlog.content} onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}></textarea>
        <input type="text" placeholder="Author" value={newBlog.author} onChange={(e) => setNewBlog({ ...newBlog, author: e.target.value })} />
        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
};

export default Blogs;
