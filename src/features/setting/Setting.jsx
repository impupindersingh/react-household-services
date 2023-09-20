import React from "react";
import "./Setting.css";
import { NavLink } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";

function Setting() {
  return (
    <>
      <div className="setting-container">
        <div className="setting-box">
          <div className="pages-box">
            <NavLink to="/favorites">
              <MdOutlineNavigateNext />
              Favorites
            </NavLink>
            <NavLink to="/setting">
              <MdOutlineNavigateNext />
              Setting
            </NavLink>
            <NavLink to="/">
              <MdOutlineNavigateNext />
              Signout
            </NavLink>
          </div>
          <div className="setting-desc-box">
            <div className="setting-heading">
              <p>settings</p>
            </div>
            <form>
              <div className="setting-images-box">
                <p>images</p>
                <button className="setting-image-btn">SELECT IMAGES</button>
              </div>
              <div className="setting-name-box">
                <p>first name</p>
                <input type="text" className="setting-input-box" />
              </div>
              <div className="setting-name-box">
                <p>last name</p>
                <input type="text" className="setting-input-box" />
              </div>
              <div className="setting-email-box">
                <p>email</p>
                <input type="email" className="setting-input-box" />
              </div>
              <div className="setting-rate-box">
                <p>hourly rate</p>
                <input type="text" className="setting-input-box" />
              </div>
              <div className="setting-availability-box">
                <p>availability</p>
                <select type="select" className="setting-select-box" />
              </div>
              <div className="setting-exp-box">
                <p>experience (if any)</p>
                <input type="text" className="setting-input-box" />
              </div>
              <div className="setting-info-box">
                <p>tell about yourself</p>
                <textarea className="custom-setting-textarea" />
              </div>
              <div className="setting-pass-box">
                <p>new password</p>
                <input type="password" className="setting-input-box" />
              </div>
              <div className="setting-pass-box">
                <p>confirm password</p>
                <input type="password" className="setting-input-box" />
              </div>
              <div>
                <button className="setting-changes-btn">save changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Setting;
