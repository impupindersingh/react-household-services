import React from "react";
import "./Addservice.css";

function Addservice() {
  return (
    <div className="main-box">
      <div className="add-detail-box">
        <div className="heading">
          <h1>Add Details</h1>
        </div>
        <form>
          <div className="catagory-box">
            <p>catagory</p>
            <select type="select" className="select-box" />
          </div>
          <div className="images-box">
            <p>images</p>
            <button className="image-btn">SELECT IMAGES</button>
          </div>
          <div className="title-box">
            <p>title</p>
            <input type="text" className="input-box" />
          </div>
          <div className="rate-box">
            <p>hourly rate</p>
            <input type="text" className="input-box" />
          </div>
          <div className="availability-box">
            <p>availability</p>
            <select type="select" className="select-box" />
          </div>
          <div className="warranty-box">
            <p>warranty</p>
            <select type="select" className="select-box" />
          </div>
          <div className="tag-box">
            <p>tags</p>
            <input type="text" className="input-box" />
          </div>
          <div className="description-box">
            <p>description</p>
            <textarea className="custom-desc-textarea" />
          </div>
          <div>
            <button className="submit-btn">submit service</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addservice;
