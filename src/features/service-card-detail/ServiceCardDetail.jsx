import React from 'react';
import "./ServiceCardDetail.css";
import serviceCard from '../../data/serviceCardData';
import Star from "../../images/service-page/Star .png";
import Flag from "../../images/service-page/flag .png";
import Rating from "../../images/service-page/rating.png";
import Cheacked from "../../images/service-page/checked.png";
import Clock from "../../images/service-page/clock.png";
import Achievement from "../../images/service-page/achievement.png";
import MasIcon from "../../images/service-page/massage-icon.png";
import { AiFillStar } from "react-icons/ai";
import MasgeIcon from "../../images/service-page/massage-icon.png";
import HeartIcon from "../../images/service-page/heart-icon.png";
import Calendar from '../../images/service-page/calendar-icon.png';
import Guarantee from "../../images/service-page/guarantee-icon.png";

function ServiceCardDetail() {
  const queryPrams = new URLSearchParams(window.location.search);
  const id = queryPrams.get("id");
  const iid = queryPrams.get("iid");
  const data = serviceCard.filter((object) => {
    return object.id === parseInt(id);
  });
  const object1 = data[0];
  const data1 = data[0].item.find(item => item.id === parseInt(iid));
  const object = data1;
  

  return (
    <>
      <div className='selected-container'>
        <div className='selected-box'>
          {object.detail.map((text) => (
            <div className='cleanout-service' key={text.id}>
              <div className='left-right-cont'>
                <div className='full-cont'>
                  <div className='top-line'></div>
                  <p className='name-category'> {data1.name} </p>
                  <div className='cleanout-ratings'>
                    <p className='cleanout'>{object1.category}</p>
                    <div className='sec-dot'></div>
                    <span className='ratings'>Rating:{object.rating}</span><br></br>
                  </div>
                  <div className='notice-one-warranty'>
                    <div className='icon-categores'>
                      <img className='gurantee-image' src={Guarantee} alt="guranteepic" />
                      <p className='notice-one'>{object.notice}</p>
                    </div>
                    <div className='warranty-icons'>
                      <div className='icones-warranty'>
                        <img className='calendr-image' src={Calendar} alt="calendarpic" />
                        <p className='warranty'>{object.warranty}</p>
                      </div>
                    </div>
                  </div>
                  <div className="three-btn">
                    <div className="first-tow-btn">
                      <button className='Details-btn'>Details</button>
                      <button className='Reviews-btn' >Reviews</button>
                    </div>
                    <button className='Favorites-btn'>Add to Favorites</button><br></br>
                  </div>
                  <div className='Vector'></div>
                  <hr className='button-bottom-line'></hr>
                  <img className="service-pic" src={require(`../../images/service-page/${text.serviceselectedpic}`)} alt='' />
                  <p className="clean-desc">{text.serviceselecteddesc}</p>
                  <div className="clean-reno-instal">
                    <button className="cleaner">Cleaning</button>
                    <button className='Renovation'>Renovation</button>
                    <button className='Installation'>Installation</button>
                  </div>
                </div>
                <div className='right-cont'>
                  <div className='left-price-line'></div>
                  <div className='price-cost'>
                    <div className='first-price'>RS 430 /hr</div>
                  </div>
                  <div className='Reply-Listing'>Reply To Listing</div>
                  <div className='star-flag-icon'>
                    <div className='icon-review'>
                      <img className="star-icon" src={Star} alt="starpic" />
                      <p className='write-review'>Write a Review</p>
                    </div>
                    <div className='icon-listing'>
                      <img flag-icon src={Flag} alt="flagphoto" />
                      <p className='report-listing'>Report Listing</p>
                    </div>
                  </div>
                  <div className='member-card'>
                    <div className='ratings-member'>
                      <div className='ratings-header'>
                        <img src={Rating} alt="rating-pic" /><br></br>
                        <span className='rating-member-card'>Rating:{object.rating}</span>
                      </div>
                      <div className='right-icon'>
                        <img src={Cheacked} alt="rightpic" />
                      </div>
                    </div>
                    <div className='member-img'>
                      <img className='rev-pic' src={require(`../../images/service-page/${object.imgsrc}`)} alt='pic' />
                    </div>
                    <p className='member-nichols'>{data1.nichols}</p>
                    <p className='member-since'>MEMBER SINCE 05/20/2023</p>
                    <div className='demand-years'>
                      <div className='clock-demand'>
                        <img className='clock-icon' src={Clock} alt="pics" />
                        <span className='on-demand'>On-Demand</span>
                      </div>
                      <div className='exp-year'>
                        <div className='years-icon'>
                          <img src={Achievement} alt="achievementpic" />
                          <div className='year'>6-7 Years</div>
                        </div>
                      </div>
                    </div>
                    <hr className='card-bottom-line'></hr>
                    <div className='card-footer'>
                      <p>Rs. / hr</p>
                      <img className='mas-icon' src={MasIcon} alt="masgpic" />
                    </div>
                  </div>
                </div>

              </div>
              <div className='green-line'></div>
            </div>
          ))}
          <div className="review-main-box">
            {object.reviews.map((review) => (
              <div key={review.id} className="review-box">
                <div className="review-profile-box">
                  <div className="review-profilepic-box">
                    <img
                      src={require(`../../images/service-page/${review.reviewphoto}`)}
                      alt=""
                    />
                  </div>
                  <div>
                    <div>
                      <p className="name-box">{review.reviewname}</p>
                    </div>
                    <div className="star-date-box">
                      <p className="star-box">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </p>
                      <p className="dot-box"></p>
                      <p className="date-box">{review.reviewdate}</p>
                    </div>
                  </div>
                </div>
                <div className="review-comment-box">
                  <p>{review.reviewdesc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relatedList-main-box">
            <div className='related-green-line'></div>
            <p className='related-heading'>Related Listings</p>
            {object1.item.slice(-4).map((obj) => (
              <div key={obj.id} >
                <div className="service" >
                  <div className='relatedlist-cont'>
                    <div className='image-name-icon'>
                      <img className='image-man' src={require(`../../images/service-page/${obj.imgsrc}`)} alt='pic' />
                      <p className='service-name'>{obj.name}</p>
                      <div className="heart-massage-icon">
                        <img className="masge-img" src={MasgeIcon} alt='pic' />
                        <img className="heart-img" src={HeartIcon} alt='pic' /></div>
                    </div>
                    <div className="service-rating-nichols">
                      <p className='service-nichols'>{obj.nichols}</p>
                      <div className="custom-dot"></div>
                      <p className='service-clean'>{object1.category}</p>
                      <div className="sec-dot"></div>
                      <p className='service-rating'>Rating: {obj.rating}</p>
                      <p className='service-people'>{obj.peoplerating}</p>
                    </div>
                    <div className='notice-price'>
                      <img className="calendar-icon" src={Calendar} alt="calendar" />
                      <p className='service-notice'>Notice: {obj.notice}</p>
                      <img className='grarantee-icon' src={Guarantee} alt="guarntee" />
                      <p className='service-warranty'> {obj.warranty}</p>
                      <p className='service-price'> {obj.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>


      </div>
    </>
  );
}

export default ServiceCardDetail;