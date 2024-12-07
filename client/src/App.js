import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CreateBlog from './components/CreateBlog';
import EditBlog from './components/EditBlog';
import BlogDetail from './components/BlogDetail'

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/create' element={<CreateBlog/>}/>
            <Route path='/edit/:id' element={<EditBlog/>}/>
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
