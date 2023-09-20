import React, { useState } from "react";
import "./Professional.css";
import Searchbar from "../../resusable-components/searchbar/Searchbar";
import rightBackLine from "../../images/professional/professional-right-line.png";
import serviceCard from "../../data/serviceCardData";
import ratingIcon from "../../images/professional/profession-rating-icon.png";
import checkIcon from "../../images/professional/profession-checked-icon.png";
import demandIcon from "../../images/professional/profession-demand-icon.png";
import graphIcon from "../../images/professional/profession-graph-icon.png";
import chatIcon from "../../images/professional/profession-chat-icon.png";
import nextIcon from "../../images/professional/profession-next-icon.png";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function Professional() {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const itemsToDisplay = serviceCard.slice(startIndex, endIndex);

  const handleNextPageClick = () => {
    if (currentPage < Math.ceil(serviceCard.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="profession-main-container">
        <div className="profession-search-container">
          <img
            className="professionBackLine"
            src={rightBackLine}
            alt="backgroundLine"
          />
          <div className="profession-search-box">
            <Searchbar />
          </div>
        </div>
        <div className="profession-desc-container">
          <div className="profession-desc-box">
            <div>
              <form>
                <p className="profession-form-text1">hourly rate</p>
                <input className="text-input1" type="text" />
                <input className="text-input2" type="text" />
                <div className="range-slider-box">
                  <div className="range-slider">
                    <Slider
                      range
                      defaultValue={[0, 100]}
                      className="custom-slider"
                    />
                  </div>
                </div>
                <p className="profession-form-text2">availability</p>
                <select className="profession-select-input" type="select" />
                <p className="profession-form-text3">experience</p>
                <select className="profession-select-input" type="select" />
                <br />
                <button className="profession-filter-btn">filter</button>
              </form>
            </div>
            <div>
              <div className="profession-right-desc">
                <div className="profession-result-box">
                  <p>
                    Showing results {startIndex + 1}-
                    {Math.min(endIndex, serviceCard.length)} of{" "}
                    {serviceCard.length}
                  </p>
                </div>
                <div className="profession-date-box">
                  <p>sort by</p>
                  <select className="custom-select">
                    <option value="date">date</option>
                    <option value="option1">option1</option>
                  </select>
                </div>
              </div>
              <div className="profession-card-box">
                {itemsToDisplay.map((professional) => (
                  <div key={professional.id} className="profession-card">
                    <div className="profession-rating-check-icon">
                      <div className="profession-rating">
                        <img src={ratingIcon} alt="icon" />
                        <p>{professional.item[0].rating}</p>
                      </div>
                      <div>
                        <img src={checkIcon} alt="icon" />
                      </div>
                    </div>
                    <div className="profession-image-box">
                      <div className="profession-profile-pic">
                        <img
                          src={require(`../../images/service-page/${professional.item[0].imgsrc}`)}
                          alt="profile-pic"
                        />
                      </div>
                    </div>
                    <div className="profession-name-box">
                      <p>{professional.item[0].nichols}</p>
                    </div>
                    <div className="profession-member-box">
                      <p>member since {professional.joinDate}</p>
                    </div>
                    <div className="profession-demand-graph-box">
                      <div className="profession-demand">
                        <img src={demandIcon} alt="icon" />
                        <p>on-demand</p>
                      </div>
                      <div className="profession-graph">
                        <img src={graphIcon} alt="icon" />
                        <p>{professional.experience} years</p>
                      </div>
                    </div>
                    <hr className="custom-hr-line" />
                    <div className="profession-rate-box">
                      <p>Rs. / hr</p>
                      <img src={chatIcon} alt="icon" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="profession-next-pages-btn">
                {Array.from({
                  length: Math.ceil(serviceCard.length / itemsPerPage),
                }).map((_, index) => (
                  <p key={index + 1} onClick={() => setCurrentPage(index + 1)}>
                    {index + 1}
                  </p>
                ))}
                <img
                  src={nextIcon}
                  alt="icon"
                  className="profession-next-icon"
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

export default Professional;
