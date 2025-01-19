import React from "react";
import { Link } from "react-router-dom";
import { FaPlusSquare } from "react-icons/fa";

const Navbar = () => (
  <nav className="navbar">
    <h1>📚</h1>
    <div className="navbar-links">
      <Link to="/">Home</Link>
      <Link to="/add">
        <FaPlusSquare size={30} color="white" />
      </Link>
    </div>
  </nav>
);

export default Navbar;
