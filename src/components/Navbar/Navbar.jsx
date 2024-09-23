import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../../public/assets/images/logo-no-background.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent z-1">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={LogoImg} alt="logo" className="img-fluid" width={60} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <i className="fa-solid fa-bars-staggered nav-icon"></i>
        </button>

        <div
          className="offcanvas offcanvas-start"
          id="offcanvasNavbar"
          tabIndex="-1"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <Link className="navbar-brand" to="/" data-bs-dismiss="offcanvas">
              <img src={LogoImg} alt="logo" className="img-fluid" width={60} />
            </Link>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body ms-md-auto">
            <ul className="navbar-nav flex-grow-1 pe-3">
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link className="nav-link" to="/new">
                  Add Recipe
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
