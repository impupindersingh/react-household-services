import React from "react";
import "./HeaderSection.css";
import woman from "../../../../images/home/header-section/woman.png";
import mechanic from "../../../../images/home/header-section/mechanic.png";
import plumber from "../../../../images/home/header-section/plumber.png";
import rightline from "../../../../images/home/header-section/right-background-line.png";
import leftline1 from "../../../../images//home/header-section/leftline1.png";
import leftline2 from "../../../../images/home/header-section/leftline2.png";
import leftline3 from "../../../../images/home/header-section/leftline3.png";

function HeaderSection() {
  return (
    <div className="box">
      <div className="box-1">
        <div className="leftbackgroundline1">
          <img src={leftline1} alt="backgroundlines" />
        </div>
        <div className="leftbackgroundline2">
          <img src={leftline2} alt="backgroundlines" />
        </div>
        <div className="leftbackgroundline3">
          <img src={leftline3} alt="backgroundlines" />
        </div>
        <div className="image-box">
          <div className="womanImage">
            <img src={woman} alt="woman" />
          </div>
          <div className="mechanicImage">
            <img src={mechanic} alt="mechanic" />
          </div>
          <div className="plumberImage">
            <img src={plumber} alt="plumber" />
          </div>
        </div>
      </div>
      <div className="box-2">
        <div className="rightLineBackground">
          <img src={rightline} alt="backgroundlines" />
        </div>
        <div className="heading-box">
          <h1>Your Trusted Companion for Household Services</h1>
        </div>
        <div className="paragraph-box">
          <p>
            Unlock a World of Trusted Experts in Your Neighborhood, Catering to
            Your Needs, Whether It's Home Repairs, Care Takers, or Beauty
            Services.
          </p>
        </div>
        <div className="button-box">
          <button>Cleaning</button>
          <button>Repair</button>
          <button>Installation</button>
          <button>Makeup</button>
          <button>Events</button>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
