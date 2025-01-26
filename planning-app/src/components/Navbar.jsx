import React from "react";
import {Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Strategy</Link>
          </li>
          <li>
            <Link to="/seo-optimization">SEO Optimization</Link>
          </li>
          <li>
            <Link to="/campaign">Campaign</Link>
          </li>
        </ul>
      </nav>
    );
  };

export default Navbar;