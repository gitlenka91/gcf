import React from 'react';
import { Link } from "react-router-dom"
import './Header.css';

function Header() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <div>Our Projects</div>
        </Link>
      </div>
    </header>
  );
}

export default Header;