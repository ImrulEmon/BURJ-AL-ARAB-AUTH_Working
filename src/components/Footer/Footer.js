import React from "react";
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          BhaiBhai<span>Hotel</span>
        </h3>

        <p className="footer-links">
          <NavLink to="/">Home</NavLink>·<NavLink to="/login">Login</NavLink>·
          <NavLink to="/">Pricing</NavLink>·<NavLink to="/">About</NavLink>·
          <NavLink to="/">Faq</NavLink>·<NavLink to="/">Contact</NavLink>
        </p>

        <p className="footer-company-name">Imrul Emon & MediSuite © 2022</p>

        <div className="footer-icons">
          <a target="_blank" href="https://twitter.com/_vimrul_">
            <i className="fa fa-facebook"></i>
          </a>
          <a target="_blank" href="https://twitter.com/_vimrul_">
            <i className="fa fa-twitter"></i>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/imrulemon">
            <i className="fa fa-linkedin"></i>
          </a>
          <a target="_blank" href="https://github.com/ImrulEmon">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>

      <div className="footer-right">
        <p>Contact Us</p>

        <form>
          <input type="text" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
