import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
      });
      setSuccess(response.data.message);
      setTimeout(() => navigate('/login'), 1500); // Redirect to login after success
    } catch (err) {
      setError(err.response?.data?.message || 'Error registering user. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
      {error && <div className="text-red-500 text-center">{error}</div>}
      {success && <div className="text-green-500 text-center">{success}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
      <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded">
          Register
        </button>
      </form>
      <div className="text-center mt-4">
        <p>
          Already have an account?{' '}
          <a href="/login" className="text-blue-500">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
