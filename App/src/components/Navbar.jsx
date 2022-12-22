import React from "react";
import img from "../assets/img/logo.png";
import "../assets/css/Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navegation">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid ">
            <Link className="navbar-brand" to="/">
              <img className="logo-imagen" src={img} />
            </Link>
            <div className="d-flex justify-content-around" id="navbarNav">
              <div>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link login me-5" to={"/login"}>
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
