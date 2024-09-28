import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isLoggedIn, profilePicture }) {
  return (
    <nav>
      <h1>Hexanoid</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        {isLoggedIn ? (
          <img src={profilePicture} alt="Profile" className="profile-pic" />
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
