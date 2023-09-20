import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import addServicesIcon from "../../images/navbar/add-services.png";
import addLoginIcon from "../../images/navbar/add-login.png";
import { SignIn } from "../../features/features-exporter";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleNavbarDropdown = () => {
    setShowDropdown(!showDropdown);
    closeModal();
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>LOGO</h2>
      </div>

      <ul className="navbar-center">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/service">Service</NavLink>
        </li>
        <li>
          <NavLink to="/requests">Requests</NavLink>
        </li>
        <li>
          <NavLink to="/professional">Professional</NavLink>
        </li>
        <li>
          <div className="dropdown">
            <span>Pages &nbsp;</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="8"
              viewBox="0 0 16 8"
              fill="none"
            >
              <path d="M1 1L8 7L15 1" stroke="black" strokeLinecap="round" />
            </svg>

            <div className="dropdown-content">
              <NavLink to="/service">Service</NavLink>
              <NavLink to="/requests">Requests</NavLink>
              <NavLink to="/professional">Professional</NavLink>
            </div>
          </div>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          {showDropdown ? (
            <div className="dropdown">
              <span>
                <CiUser /> Name &nbsp;
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="8"
                viewBox="0 0 16 8"
                fill="none"
              >
                <path d="M1 1L8 7L15 1" stroke="black" strokeLinecap="round" />
              </svg>
              <div className="dropdown-content">
                <NavLink to="/favorites">Favorites</NavLink>
                <NavLink to="/setting">Setting</NavLink>
                <NavLink to="/" onClick={toggleNavbarDropdown}>
                  Sign Out
                </NavLink>
              </div>
            </div>
          ) : (
            <div className="sign-in-modal" onClick={() => setShowModal(true)}>
              Sign In &nbsp;
              <img className="login-icon" src={addLoginIcon} alt="loginicon" />
            </div>
          )}
          {showModal && (
            <SignIn
              closeModal={closeModal}
              toggleNavbarDropdown={toggleNavbarDropdown}
            />
          )}
        </li>
      </ul>
      <div className="navbar-right">
        <button
          type="button"
          className="add-services-btn"
          onClick={() => navigate("/addservice")}
        >
          Add Services
        </button>
        <div className="request-service">
          <img className="add-btn-icon" src={addServicesIcon} alt="btnicon" />
          <button
            type="button"
            className="req-btn"
            onClick={() => navigate("/addrequest")}
          >
            {" "}
            Request Service
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
