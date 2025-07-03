import "./NavBar.css";
import DarkMode from "../components/DarkMode.jsx";
import picimage from "../assets/personimg.jpg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex-column">
        <div className="top-part">
          <NavLink to="/" className="top-part">
            <img src={picimage} alt="Sam" className="round" />
            <div>
              <h3>Sam</h3>
              <p>Photographer</p>
            </div>
          </NavLink>
        </div>
        <div className="desktop">
          <ul className="nav-list">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active-link" : "ul-link"
              }
            >
              Gallery
            </NavLink>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "active-link" : "ul-link"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "active-link" : "ul-link"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <DarkMode />
        <div className="brand desktop">
          <a href="#" className="">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
          <a href="#" className="">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="#" className="">
            <i class="fa-brands fa-tiktok"></i>
          </a>
        </div>
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        {menuOpen && (
          <div className="mobile-menu d-flex gap-1">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Gallery
            </NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
