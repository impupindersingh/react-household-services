import React, { useState } from "react";
import "./Request.css";
import Searchbar from "../../resusable-components/searchbar/Searchbar";
import rightBackLine from "../../images/request/request-right-line.png";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import nextIcon from "../../images/request/request-next-icon.png";
import requestCard from "../../data/requestCardData";
import chatIcon from "../../images/request/request-chat-icon.png";
import Calendar from "../../images/request/request-calender-icon.png";
import clock from "../../images/request/request-clock-icon.png";

function Request() {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const itemsToDisplay = requestCard.slice(startIndex, endIndex);

  const handleNextPageClick = () => {
    if (currentPage < Math.ceil(requestCard.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="request-main-container">
        <div className="request-search-container">
          <img
            className="requestBackLine"
            src={rightBackLine}
            alt="backgroundLine"
          />
          <div className="request-search-box">
            <Searchbar />
          </div>
        </div>
        <div className="request-desc-container">
          <div className="request-desc-box">
            <div>
              <form>
                <p className="request-form-text1">budget</p>
                <input className="request-text-input1" type="text" />
                <input className="request-text-input2" type="text" />
                <div className="request-range-slider-box">
                  <div className="request-range-slider">
                    <Slider
                      range
                      defaultValue={[0, 100]}
                      className="request-custom-slider"
                    />
                  </div>
                </div>
                <p className="request-form-text2">due date</p>
                <select className="request-select-input" type="select" />
                <p className="request-form-text3">time range</p>
                <select className="request-select-input" type="select" />
                <br />
                <button className="request-filter-btn">filter</button>
              </form>
            </div>
            <div>
              <div className="request-right-desc">
                <div className="request-result-box">
                  <p>
                    Showing results {startIndex + 1}-
                    {Math.min(endIndex, requestCard.length)} of{" "}
                    {requestCard.length}
                  </p>
                </div>
                <div className="request-date-box">
                  <p>sort by</p>
                  <select className="request-custom-select">
                    <option value="date">date</option>
                    <option value="option1">option1</option>
                  </select>
                </div>
              </div>
              <div className="request-card-box">
                {itemsToDisplay.map((request) => (
                  <div key={request.id} className="request-card">
                    <div className="request-desc-name-box">
                      <p>{request.desc}</p>
                      <img src={chatIcon} alt="icon" />
                    </div>
                    <div className="name-date-box">
                      <p className="request-profileName">{request.name}</p>
                      <div className="dot"></div>
                      <p className="request-added-date">
                        added on {request.addedDate}
                      </p>
                    </div>
                    <div className="request-calendarTiming-box">
                      <div className="request-calendar-box">
                        <img src={Calendar} alt="calendar" />
                        <p className="request-calendar-date">{request.date}</p>
                      </div>

                      <div className="request-timing-box">
                        <img src={clock} alt="guarntee" />
                        <p className="request-timing">{request.timing}</p>
                      </div>

                      <p className="request-price"> {request.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="request-next-pages-btn">
                {Array.from({
                  length: Math.ceil(requestCard.length / itemsPerPage),
                }).map((_, index) => (
                  <p key={index + 1} onClick={() => setCurrentPage(index + 1)}>
                    {index + 1}
                  </p>
                ))}
                <img
                  src={nextIcon}
                  alt="icon"
                  className="request-next-icon"
                  onClick={handleNextPageClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Request;
