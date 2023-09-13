import { Link, useNavigate } from "react-router-dom";
import "./topbar.css";
import { useState } from "react";

export default function Topbar({ isAuthenticate, handleAuthenticate }) {
  const navigate = useNavigate();
  const handleLogout = ()=>{
    handleAuthenticate();
    navigate("/login")
  }
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          {isAuthenticate ? (
            <>
              <li className="topListItem">
                <Link className="link" to="/">
                  HOME
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/About">
                  About Us
                </Link>
              </li>
              <li className="topListItem">
                <Link to="/contact">CONTACT</Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/write">
                  WRITE
                </Link>
              </li>
              <li className="topListItem">
                <Link onClick={handleLogout}>LOGOUT</Link>
              </li>
            </>
          ) : (
            <>
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
