import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-400 hover:text-white transition duration-200"
          >
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-400 hover:text-white transition duration-200"
          >
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-400 hover:text-white transition duration-200"
          >
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-400 hover:text-white transition duration-200"
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Blogify Website. All rights reserved since-2024.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
