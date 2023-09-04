import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const NavBar = () => {
  const regis_token = localStorage.getItem("ocms_token");
  const dash =
    regis_token === null ? { to: "/register" } : { to: "/dashboard" };

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bgval hover-nav ho_navbar">
      <div className="container">
        <span className="navbar-brand">
          <img
            src="/images/gms_icon.png"
            alt="logo"
            width="48"
            height="40"
            className="d-inline-block align-text-top"
          />
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item navg">
              <Link
                className="nav-link active"
                aria-current="page"
                to={{ pathname: "/", hash: "#" }}
              >
                <span className="tex">Home</span>
              </Link>
            </li>
            <li className="nav-item navg">
              <Link className="nav-link active" aria-current="page" to="/">
                <span className="tex">About</span>
              </Link>
            </li>
            <li className="nav-item navg">
              <Link className="nav-link" aria-current="page" to="/">
                <span className="tex"> Clients</span>
              </Link>
            </li>
            <li className="nav-item navg">
              <Link className="nav-link" aria-current="page" to="/">
                <span className="tex"> Testimonials</span>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item navg">
              <Link
                className="nav-link active danger"
                aria-current="page"
                {...dash}
              >
                <span className="tex">
                  {regis_token === null ? "Register" : "Dashboard"}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
