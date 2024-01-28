import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.scss";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className="navbar">
        <div className="navbarContainer">
          <div className="logo">
            <h1>
              <Link to={"/"}>Dazzling Demo</Link>
            </h1>
          </div>
          <div className="menu">
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/addPage"}>Add</NavLink>
              </li>
              <li>
                <NavLink to={"/basket"}>Basket</NavLink>
              </li>
              <li>
                <NavLink to={"/wishlist"}>Wishlist</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="resNavbar">
        <div className="row">
          <div className="logo">
            <h1>
              <Link to={"/"}>Dazzling Demo</Link>
            </h1>
          </div>
          <div className="bars" onClick={toggleNavbar}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
        <div className={`resMenu ${isOpen ? "open " : ""}`}>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/addPage"}>Add</NavLink>
            </li>
            <li>
              <NavLink to={"/basket"}>Basket</NavLink>
            </li>
            <li>
              <NavLink to={"/wishlist"}>Wishlist</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
