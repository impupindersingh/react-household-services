import React from 'react';
import './ServiceStep.css';
import stepOne from "../../../../images/home/service-step/group-one.png";
import stepTow from "../../../../images/home/service-step/group-tow.png";
import stepThree from "../../../../images/home/service-step/group-three.png";
import servciceStep from "../../../../images/home/service-step/service-step-right-line.png"

function ServiceStep() {
  return (
    <>
      <div className="service-steps">
        <div className="started">
          <span className="get-job">Let Get Started</span>
        </div>
        <p className="simle-steps">It will take three simple steps</p>

        <div className="step-oll">
          <div className="div1">
            <img className="step-one" src={stepOne} alt='one' />
            <h3 className="step-one-header">Make a Service Request</h3>
            <p className="step-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</p></div>
          <div className="div2">
            <img className="step-tow" src={stepTow} alt='two'/>
            <h3 className="step-tow-header">Evaluate Special Offers</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</p></div>
          <div className="div3">
            <img className="step-three" src={stepThree} alt='three' />
            <h3 className="step-three-header">Get Your Job Done</h3>
            <p className="">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy </p></div>
            <img className="srvice-step-right"src={servciceStep} alt='lines' />
        </div>

       

      </div></>
  );
};

export default ServiceStep;