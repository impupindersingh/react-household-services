import React from 'react';
import "./ServiceCard.css";
import LeftSide from "../../images//service-page/service-left-side-lineing.png";
import RightSide from "../../images/service-page/right-side-service-page.png";
import { Searchbar } from '../../resusable-components/resusable-components-exporter';
import serviceCard from "../../data/serviceCardData";
import Polygon from "../../images/service-page/polygon-icon.png";
import MasgeIcon from "../../images/service-page/massage-icon.png";
import HeartIcon from "../../images/service-page/heart-icon.png";
import Calendar from '../../images/service-page/calendar-icon.png';
import Guarantee from "../../images/service-page/guarantee-icon.png";
import { useNavigate } from 'react-router-dom';

function ServiceCard() {
  const navigate = useNavigate();
  const handleClick = (iid) => {
    navigate(
      {
        pathname: "/detailservice",
        search: `?id=${id}&iid=${iid}`
      }
    )
  }
  const queryPrams = new URLSearchParams(window.location.search);
  const id = queryPrams.get("id");
  const data = serviceCard.filter((service) => {
    return service.id === parseInt(id);
  });
  const service = data[0];
  function ServiceList() {
    return (
      <>
        <div>
          {service.item.map((obj) => (
            <div key={obj.id} >
              <div className="service" onClick={() => { handleClick(obj.id) }}>
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
                  <p className='service-clean'>{service.category}</p>
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
          ))
          }
        </div>
      </>
    );
  };
  function Catagories() {
    return (
      <>
        <div className='main-cont'>
          <div className='radio-btn'>
            <div className="first-radio-btn">
              <input type="radio" className="radio__radio" name="drone" value="huey" />
              <label className="catagories" for="huey">All Catagories</label><br></br>
              <input type="radio" className="radio__radis" name="drone" value="huey" checked />
              <label className='cleaning' for="huey">{service.category}</label>
            </div>
          </div>
          <div className='showing-result'>SHOWING 1-6 OF 6 RESULTS
          </div>
          <div className="date-clon">
            <p className='short-by'>SORT BY</p>
            <div className='date-under'>Date
              <div className='date-under-line'></div></div>
            <img className='polygon' src={Polygon} alt='pic' />
          </div>
        </div>
        <div className="form">
          <div className='Hourly-rate'>
            <p className="tags" >Tags</p>
            <div className='under-line'></div>
            <p className="rating-hour">HOURLY RATE</p>
            <div className="tow-line">
              <div className="secnd-under-line"></div>
              <div className='third-under-line'></div></div>
            <div className="slider-class">
              <form action="/action_page.php">
                <label for="vol"></label>
                <input type="range" className="vol" name="vol" min="0" max="50">
                </input>
              </form></div>
            <div className="Availabity"><p>Availabity</p></div>
            <div className="warranty"><p>Warranty</p></div>
            <button className='filter-btn' type="button">Filter</button>
          </div>
          <div className='service-list'>
            <ServiceList />
          </div>
        </div>
      </>
    )
  };
  return (
    <>
      <div className="service-full-cont">
        <div className='left-side-cont'>
          <button className='listing' type='button'>LISTINGS</button>
          <div className="cleanings"> {service.category}</div>
          <p className='dust-make'>{service.desc}</p>
          <img className='left-side-line' src={LeftSide} alt="liningleftpic" />
          <img className="right-side-line" src={RightSide} alt="liningrightpic" />
        </div>
        <div className='search-location'><Searchbar /></div>
      </div><br></br>
      <Catagories />
    </>
  )

}

export default ServiceCard;