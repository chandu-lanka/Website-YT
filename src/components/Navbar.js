import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./styles/Navbar.css";
import logo from "../imgs/logo_channel.png";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="The Orange Triangle" />
      <div className={clicked ? "nav-links active" : "nav-links"}>
        <Switch>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </Switch>
        <Switch>
          <Link to="/tuts" className="nav-link">
            Tutorials
          </Link>
        </Switch>
        <Switch>
          <Link to="/devlogs" className="nav-link">
            Devlogs
          </Link>
        </Switch>
      </div>
      <div onClick={handleClick} className="menu">
        <i class={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
};

export default Navbar;
