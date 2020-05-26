import React from "react";
import "../styles/styles.scss";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Images from "../asset-libraries/Images";

const Nav = (props) => {
  const isLoggedIn = !!props.userId;

  return (
    <Navbar bg="dark">
      <div className="nav-container">
        {isLoggedIn ? (
          <>
            <Link to={`/users/${props.userId}`} className="profile-btn">
              <img src={props.avatar} alt="Profile" className="tiny-avatar" />
            </Link>
            <Link to="/" className="logo-btn">
<<<<<<< HEAD
              <img id="logo" src={Images.logo} alt="Desert Heat Logo" />
=======
              <img id="logo" src={logo} alt="logo"/>
>>>>>>> loading-images
            </Link>
            <Link to="/" className="btn">
              Play!
            </Link>
            <Link to="/leaderboard" className="btn">
              Leaderboard
            </Link>
            <button onClick={props.signOut} className="btn">
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="profile-btn">
              Log In
            </Link>
            <Link to="/signup" className="btn">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </Navbar>
  );
};

export default Nav;
