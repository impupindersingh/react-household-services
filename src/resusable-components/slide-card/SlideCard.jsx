import { useState, useEffect } from "react";
import React from "react";
import "./SlideCard.css";
import DaskGroup from "../../images/home/slider/dask-group.png";
import SlideRight from "../../images/home/slider/slide-right.png";
import CheckList from "../../images/home/slider/check-list.png"
import Massage from "../../images/home/slider/chat.png"
import TelePhone from "../../images/home/slider/telephone.png"

const items = [
  {
    img: "check-list",
    rating: '4.2',
    number:"(20)",
    name:"Alex Andrew",
    des:"Cleaning Expert Since ( Date )"

  }, {
    icon: "check-list",
    rating: '4.2',
    number:"(20)",
    name:"Alex Andrew",
    des:"Cleaning Expert Since ( Date )"
  }, {
    icon: "check-list",
    rating: '4.2',
    number:"(20)",
    name:"Alex Andrew",
    des:"Cleaning Expert Since ( Date )"
  }, {
    icon: "check-list",
    rating: '4.2',
    number:"(20)",
    name:"Alex Andrew",
    des:"Cleaning Expert Since ( Date )"
  }, 
  {
    icon: "check-list",
    rating: '4.2',
    number:"(20)",
    name:"Alex Andrew",
    des:"Cleaning Expert Since ( Date )"
  }, {
    icon: "check-list",
    rating: '4.2',
    number:"(20)",
    name:"Alex Andrew",
    des:"Cleaning Expert Since ( Date )"
  }
];


const Card = (props) => {
  return (
    <li className="card">
   <span className="material-icons">{props.icon}</span>
    <img className="check-list-img" src={CheckList} alt="checklist"/>
    <div className="rating-number">
      <p className="card-rating">{props.rating}</p>
      <span className="card-number">{props.number}</span><br></br></div>
      <img className="young-man" src={DaskGroup} alt="youngMan"/>
      <h3 className="card-name">{props.name}</h3>
      <p className="card-des">{props.des}</p>
      <hr className="card-divider"></hr>
      <div className="concat-prize-icon">
        <p className="cost">Price/hr</p>
        <div className="icons">
        <img className="masg-icon" src={Massage} alt="massageimg"/>
        <img className="telephone-icon" src={TelePhone} alt="telephoneimg"/></div>
      </div>


   
    </li>
  
  )
}

const SlideCard = () => {
  const [moveClass, setMoveClass] = useState('');
  const [carouselItems, setCarouselItems] = useState(items);

  useEffect(() => {
    document.documentElement.style.setProperty('--num', carouselItems.length);
  }, [carouselItems])

  const handleAnimationEnd = () => {
    if (moveClass === 'prev') {
      shiftNext([...carouselItems]);
    } else if (moveClass === 'next') {
      shiftPrev([...carouselItems]);
    }
    setMoveClass('')
  }

  const shiftPrev = (copy) => {
    let lastcard = copy.pop();
    copy.splice(0, 0, lastcard);
    setCarouselItems(copy);
  }

  const shiftNext = (copy) => {
    let firstcard = copy.shift();
    copy.splice(copy.length, 0, firstcard);
    setCarouselItems(copy);
  }

  return (
     <div className="slider-cart">
        
      <div className="meet-head">  
      <img className="slide-right" src={SlideRight} alt="lines" />
        <span>Meet Our Experts</span>
      </div>
      <div className="most-near">
        <p>Most trusted professionals near you</p>
      </div>
      <div className="carouselwrapper module-wrapper">

        <div className="ui">
          <button onClick={() => setMoveClass('next')} className="prev">
            <span className="material-icons"> chevron_left</span>
          </button>
          <button onClick={() => setMoveClass('prev')} className="next">
            <span className="material-icons">chevron_right</span>
          </button>
        </div>
        <ul onAnimationEnd={handleAnimationEnd} className={`${moveClass} carousel`}>
        {carouselItems.map((t, index) => 
          <Card key={t.rating + index} rating={t.rating} number={t.number}   name={t.name}des={t.des}/>
        )}
      </ul>
      </div>
      </div>
  )
}


export default SlideCard;