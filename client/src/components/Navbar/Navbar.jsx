import React from "react";
import "./navbar.css"

const Navbar = () => {
  return (
    <>
      <nav className="theNav">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center">
            Google Books
          </a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <a href="sass.html">Search</a>
            </li>
            <li>
              <a href="badges.html">Saved</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
