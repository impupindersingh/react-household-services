import React from "react";
import "./Addrequest.css";

function Addrequest() {
  return (
    <div className="request-main-box">
      <div className="add-request-box">
        <div className="request-heading">
          <h1>Add Details</h1>
        </div>
        <form>
          <div className="request-images-box">
            <p>images</p>
            <button className="request-image-btn">SELECT IMAGES</button>
          </div>
          <div className="request-title-box">
            <p>title</p>
            <input type="text" className="request-input-box" />
          </div>
          <div className="request-budget-box">
            <p>budget</p>
            <input type="text" className="request-input-box" />
          </div>
          <div className="request-duedate-box">
            <p>due date</p>
            <input type="text" className="request-input-box" />
          </div>
          <div className="timeRange-box">
            <p>time range</p>
            <select type="select" className="request-select-box" />
          </div>
          <div className="request-description-box">
            <p>description</p>
            <textarea className="custom-request-textarea" />
          </div>
          <div>
            <button className="req-submit-btn">submit service</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addrequest;
