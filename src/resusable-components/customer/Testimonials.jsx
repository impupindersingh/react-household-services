import React from 'react'
import "./Testimonials.css"
import TestimonialLeftLines from "../../images/home/testimonial/testimonial-left-lines.png";
import TestimonialRightLines from "../../images/home/testimonial/testimonial-right-lines.png";
import TestimonialSampleImage from "../../images/home/testimonial/testimonial-sample-image.png"
import TestimonialSampleRating from "../../images/home/testimonial/testimonial-sample-rating.png"
import { GrNext } from 'react-icons/gr'
import { GrPrevious } from 'react-icons/gr'

const Testimonial = ({ image, name, rating, feedback }) => {
  return <div className="testimonial">
    <div className="testimonial-image-cont">
      <img className="testimonial-image" src={image} alt={name + "-Image"} />
    </div>
    <div className="testimonial-content">
      <div className="testimonial-content__name">{name}</div>
      <div className="testimonial-content__rating"><img src={rating} alt="Sample rating pic" /></div>
      <div className="testimonial-content__feedback">{feedback}</div>
    </div>
  </div>
}

function Testimonials() {
  return (
    <>
      <div className="testimonials-cont">
        <div className="testimonial-header">
          <h3>What People Say About Us</h3>
          <p>Genuine Testimonials from Our Valued Customers</p>
        </div>

        <div className="testimonials">
          <Testimonial
            image={TestimonialSampleImage}
            name="Willie James"
            rating={TestimonialSampleRating}
            feedback="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi eni ad minim veniam"
          />
          <Testimonial
            image={TestimonialSampleImage}
            name="Willie James"
            rating={TestimonialSampleRating}
            feedback="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi eni ad minim veniam"
          />
        </div>
        <div className="left-right-lines">
        <img className="testimonial-left-lines" src={TestimonialLeftLines} alt='lines' />
        <img className="testimonial-right-lines" src={TestimonialRightLines} alt="Lines in the customer container" /></div>
         
        <div className="chavnor">
        <button  className="gr-next"type="button"><GrNext/></button>
        <button  className="gr-previous"type="button"> <GrPrevious/></button>
        </div>
        
      </div>
    </>
  )
}

export default Testimonials;