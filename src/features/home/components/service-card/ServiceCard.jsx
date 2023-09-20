import React from 'react'
import "./ServiceCard.css";
import maskGroup from "../../../../images/home/service-card/mask-group.png";
import taskGroup from '../../../../images/home/service-card/task-group.png';
import lineTask from '../../../../images/home/service-card/line-task.png';
import leftDesign from "../../../../images/home/service-card/left-design.png";
import rightDesign from "../../../../images/home/service-card/card-left.png";

const Section = ({ imageURL, heading, desc, btnContent }) => {
  return <div className="request">
    <img src={imageURL} alt='profilepic'/>
    <div className="header-card"> {heading}<br /></div>
    <div className="desc">{desc}</div>
    {btnContent}
  </div>
}

function ServiceCard() {
  return (
    <>
      <div className='full-cart'>
        <div className='service-card'>
          <div className="box-left">
            <Section className="first-card" imageURL={maskGroup} heading={"Require A Task To Be Completed"} desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi eniad minim veniam" btnContent={<button type="button" className="typeof">Request Service</button>}
            />
            <img className="lines-image left-line" src={rightDesign} alt="lines" />
          </div>
          <div className="linetask"></div>  <img src={lineTask} alt='lines' />
          <div className="box-right">
            <Section className="secund-card" imageURL={taskGroup} heading={"Join as a certified professional"} desc={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi eniad minim veniam"} btnContent={<button type="button" className="typeof">Add Service</button>} />
            <img className="lines-image right-line" src={leftDesign} alt="" />

          </div>
        </div>
      
      </div>

    </>
  );
};

export default ServiceCard;