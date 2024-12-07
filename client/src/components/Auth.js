import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = isLogin ? 'http://localhost:5000/api/auth/login' : 'http://localhost:5000/api/auth/register';
    const body = isLogin ? { email, password } : { username, email, password };

    axios.post(url, body)
      .then(res => {
        if (isLogin) {
          localStorage.setItem('token', res.data.token);
          history.push('/');
        } else {
          setIsLogin(true);
        }
      })
      .catch(err => alert(err.response.data.message));
  };

  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />}
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <p onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Don\'t have an account? Register' : 'Already have an account? Login'}</p>
    </div>
  );
};

export default Auth;
