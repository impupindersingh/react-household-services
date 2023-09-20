import { useEffect } from "react";
import ReactDom from "react-dom";
import React from "react";
import "./SignIn.css";
import close_circle from "../../images/sign-in/close-circle.png";
import { NavLink } from "react-router-dom";

function SignIn({ closeModal, toggleNavbarDropdown }) {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const handleFilterClick = (e) => {
    toggleNavbarDropdown(e.preventDefault());
  };

  return ReactDom.createPortal(
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <div className="modal-content">
          <div>
            <form>
              <div className="signin-desc">
                <p>Sign In</p>
              </div>
              <div className="user-box">
                <p>user name or email</p>
                <input type="text" />
              </div>
              <div className="password-box">
                <p>password</p>
                <input type="password" />
              </div>
              <div className="forgot-link">
                <NavLink>forget password?</NavLink>
              </div>
              <div className="filter-btn">
                <button onClick={handleFilterClick}>filter</button>
              </div>
              <div className="signup-box">
                <p>
                  don't have an account?<NavLink>Signup</NavLink>
                </p>
              </div>
            </form>
          </div>
          <img
            src={close_circle}
            alt="close-icon"
            className="close-icon-image"
            onClick={closeModal}
          />
        </div>
      </div>
    </>,
    document.getElementById("myPortalModal")
  );
}

export default SignIn;
