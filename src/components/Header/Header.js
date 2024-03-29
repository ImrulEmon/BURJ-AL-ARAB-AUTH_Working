import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import header from "../../images/header.png";
import logo from "../../images/icons/logo.png";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { signInUsingGoogle, user, logOut } = useAuth();

  return (
    <div
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})`,
        // filter: 'blur(.5px)'
      }}
      className="header"
    >
      <nav className="nav">
        <ul>
          <li>
            <img className="logo" src={logo} alt="" />
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
          {user?.displayName ?'':
            <Link to="/login">Login / Register</Link>}
          </li>
          <li>
            <Link className="btn-book" to="/book">
              Book
            </Link>
          </li>
          <li>
            {user?.displayName ? (
              <button onClick={logOut} className="btn btn-danger">Log out</button>
            ) : (
                <button onClick={signInUsingGoogle} className="btn btn-primary">Log In</button>
            )}
          </li>
        </ul>
      </nav>
      <div className="title-container">
       {
       user? <h3>Welcome :Mr. {user?.displayName}</h3>:''
       }
       <h1>BhaiBhai Hotel</h1>
        <h2>A global icon of Arabian luxury</h2>
      </div>
    </div>
  );
};

export default Header;
