import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="logo">
        <li className="logo1">Višnjan</li>
        <li className="logo2">OBSERVATORY</li>
      </ul>
      <ul className="list">
        <li onClick={() => console.log("ASTROPHOTOGRAPHY")}>
          ASTROPHOTOGRAPHY
        </li>
        <li onClick={() => console.log("EDUCATION")}>EDUCATION</li>
        <li onClick={() => console.log("ABOUT OBSERVATORY")}>
          ABOUT OBSERVATORY
        </li>
        <li onClick={() => console.log("CONTACT")}>CONTACT</li>
      </ul>
    </div>
  );
};

export default Navbar;
