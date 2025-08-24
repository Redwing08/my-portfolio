import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-scroll";
import "./css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  fixed-top navbar-design navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>

        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          {/* <div className="navbar-nav mx-auto text-center"> */}
            <div className="navbar-nav ms-auto text-center">

         
              <Link className="nav-links-link" to="home" smooth={true} duration={100} spy={true} activeClass="active">
                Home
              </Link>
              <Link className="nav-links-link" to="achievement" smooth={true} duration={100} spy={true} activeClass="active">
                Achievements
              </Link>
              <Link className="nav-links-link" to="project" smooth={true} duration={100} spy={true} activeClass="active">
                Projects
              </Link>
              <Link className="nav-links-link" to="about" smooth={true} duration={100} spy={true} activeClass="active">
                About Me
              </Link>
              <Link className="nav-links-link" to="contact" smooth={true} duration={100} spy={true} activeClass="active">
                Contact Me
              </Link>
            </div>

          </div>
        </div>

    </nav>
  );
}

export default Navbar;
