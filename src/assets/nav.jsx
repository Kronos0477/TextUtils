import React from "react";
import { Link } from "react-router-dom";
function Nav(props) {
  return (
    <div>
      {" "}
      <nav
        className={`navbar navbar-expand-lg  bg-${
          props.dark_mode ? "dark" : "light"
        }`}
      >
        <div className="container-fluid ">
          <Link
            className={`navbar-brand text-${
              props.dark_mode ? "white" : "dark"
            }`}
            to="/"
          >
            TextUtils
          </Link>
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
              <li className="nav-item">
                <Link
                  className={`nav-link active text-${
                    props.dark_mode ? "white" : "dark"
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link active text-${
                    props.dark_mode ? "white" : "dark"
                  }`}
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                onClick={() => {
                  props.enablemode();
                }}
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className={`form-check-label text-${
                  props.dark_mode ? "white" : "dark"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Dark Mode{" "}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
