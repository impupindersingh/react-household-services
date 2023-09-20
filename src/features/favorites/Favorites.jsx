import React from "react";
import "./Favorites.css";
import { NavLink } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";
import serviceCard from "../../data/serviceCardData";
import MasgeIcon from "../../images/service-page/massage-icon.png";
import Calendar from "../../images/service-page/calendar-icon.png";
import Guarantee from "../../images/service-page/guarantee-icon.png";
import { BsFillHeartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

function Favorites() {
  const data = serviceCard;
  const favorites = data[0];

  return (
    <>
      <div className="favorites-container">
        <div className="favorites-box">
          <div className="favorites-pages-box">
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
          <div className="favorites-desc-box">
            <div className="favorites-heading">
              <p>favorites</p>
            </div>
            <div>
              {favorites.item.slice(-5).map((favorite) => (
                <div key={favorite.id} className="favorite-card-box">
                  <div className="favorite-profile-pic">
                    <img
                      src={require(`../../images/service-page/${favorite.imgsrc}`)}
                      alt="profile-pic"
                    />
                  </div>
                  <div>
                    <div className="favorite-serviceDesc-box">
                      <div className="favorite-serviceName">
                        <p>{favorite.name}</p>
                      </div>
                      <div>
                        <img
                          src={MasgeIcon}
                          alt="pic"
                          className="favorite-message-icon"
                        />
                        <BsFillHeartFill className="heart-icon" />
                      </div>
                    </div>
                    <div className="favorite-categoryName-box">
                      <p className="favorite-profileName">{favorite.nichols}</p>
                      <div className="favorite-dot-box"></div>
                      <p className="favorite-category">{favorites.category}</p>
                      <div className="favorite-dot-box"></div>
                      <p className="favorite-rating">
                        RATING: <AiFillStar /> {favorite.rating}
                        <span>(2)</span>
                      </p>
                    </div>
                    <div className="favorite-noticeWarranty-box">
                      <div className="favorite-notice-box">
                        <img src={Calendar} alt="calendar" />
                        <p className="favorite-notice">
                          Notice: {favorite.notice}
                        </p>
                      </div>

                      <div className="favorite-warranty-box">
                        <img src={Guarantee} alt="guarntee" />
                        <p className="favorite-warranty">
                          {favorite.warranty}
                        </p>
                      </div>

                      <p className="favorite-price"> {favorite.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Favorites;
