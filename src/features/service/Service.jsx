import React, { useState } from "react";
import "./Service.css";
import Searchbar from "../../resusable-components/searchbar/Searchbar";
import leftBackLine from "../../images/service/left-background-line.png";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import serviceCard from "../../data/serviceCardData";
import { IoCaretDown } from "react-icons/io5";
import { BsFillHeartFill } from "react-icons/bs";
import MasgeIcon from "../../images/service-page/massage-icon.png";
import { AiFillStar } from "react-icons/ai";
import Calendar from "../../images/service-page/calendar-icon.png";
import Guarantee from "../../images/service-page/guarantee-icon.png";
import nextIcon from "../../images/professional/profession-next-icon.png";

function Service() {
  const itemsPerPage = 8;
  const [visibleCategory, setVisibleCategory] = useState(
    serviceCard.slice(0, itemsPerPage)
  );
  const [showAll, setShowAll] = useState(false);
  function showRemainingCategory() {
    setVisibleCategory(serviceCard);
    setShowAll(true);
  }
  return (
    <>
      <div className="servicepage-main-container">
        <div className="servicepage-search-container">
          <img
            className="serviceBackLine"
            src={leftBackLine}
            alt="backgroundLine"
          />
          <div className="service-search-box">
            <Searchbar />
          </div>
        </div>
        <div className="service-desc-container">
          <div className="service-desc-box">
            <div>
              <form>
                <div>
                  <div className="radio-category-box">
                    <input
                      type="radio"
                      value="category"
                      className="custom-radio"
                    />
                    <label for="category" className="radio-text">
                      all categories
                    </label>
                  </div>
                  {visibleCategory.map((item) => (
                    <div key={item.id} className="all-category-radio-box">
                      <input
                        type="radio"
                        value="category"
                        className="custom-radio"
                      />
                      <label for="category" className="radio-text">
                        {item.category}
                      </label>
                    </div>
                  ))}
                  {!showAll && (
                    <p
                      onClick={showRemainingCategory}
                      className="viewmore-text"
                    >
                      view more <IoCaretDown />
                    </p>
                  )}
                </div>
                <p className="service-form-text1">tags</p>
                <input className="service-input" type="text" />
                <p className="service-form-text2">hourly rate</p>
                <input className="service-text-input1" type="text" />
                <input className="service-text-input2" type="text" />
                <div className="service-range-slider-box">
                  <div className="service-range-slider">
                    <Slider
                      range
                      defaultValue={[0, 100]}
                      className="service-custom-slider"
                    />
                  </div>
                </div>
                <p className="service-form-text3">availability</p>
                <input className="service-input" type="text" />
                <p className="service-form-text4">warranty</p>
                <input className="service-input" type="text" />
                <br />
                <button className="service-filter-btn">filter</button>
              </form>
            </div>
            <div>
              <div className="service-right-desc">
                <div className="service-result-box">
                  <p>Showing results 1-6 of 6</p>
                </div>
                <div className="service-date-box">
                  <p>sort by</p>
                  <select className="service-custom-select">
                    <option value="date">date</option>
                    <option value="option1">option1</option>
                  </select>
                </div>
              </div>
              <div className="service-card-box">
                {serviceCard[0].item.map((service) => (
                  <div key={service.id} className="servicepage-card">
                    <div className="serviceCard-profile-pic">
                      <img
                        src={require(`../../images/service-page/${service.imgsrc}`)}
                        alt="profilePic"
                      />
                    </div>
                    <div>
                      <div className="servicepage-serviceDesc-box">
                        <div className="servicepage-serviceName">
                          <p>{service.name}</p>
                        </div>
                        <div>
                          <img
                            src={MasgeIcon}
                            alt="pic"
                            className="servicepage-message-icon"
                          />
                          <BsFillHeartFill className="service-heart-icon" />
                        </div>
                      </div>
                      <div className="servicepage-categoryName-box">
                        <p className="servicepage-profileName">
                          {service.nichols}
                        </p>
                        <div className="servicepage-dot-box"></div>
                        <p className="servicepage-category">
                          {serviceCard[0].category}
                        </p>
                        <div className="servicepage-dot-box"></div>
                        <p className="servicepage-rating">
                          RATING: <AiFillStar /> {service.rating}
                          <span>(2)</span>
                        </p>
                      </div>
                      <div className="servicepage-noticeWarranty-box">
                        <div className="servicepage-notice-box">
                          <img src={Calendar} alt="calendar" />
                          <p className="servicepage-notice">
                            {service.notice} Notice
                          </p>
                        </div>

                        <div className="servicepage-warranty-box">
                          <img src={Guarantee} alt="guarntee" />
                          <p className="servicepage-warranty">
                            {service.warranty}
                          </p>
                        </div>

                        <p className="servicepage-price"> {service.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="servicepage-pages-btn">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <img
                  src={nextIcon}
                  alt="icon"
                  className="servicepage-next-icon"
                />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
