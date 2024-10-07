import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white text-2xl font-bold">AI Mock Interview</h1>
        <div>
          <Link to="/" className="text-white mx-4">Home</Link>
          <Link to="/about" className="text-white mx-4">About</Link>
          <Link to="/interview" className="text-white mx-4">Start Interview</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
