import React from "react";
import serviceCard from "../../data/serviceCardData";
import "./ServiceCardDetail.css";
import { AiFillStar } from "react-icons/ai";

function ServiceCardDetail() {
  const queryPrams = new URLSearchParams(window.location.search);
  const id = queryPrams.get("id");
  const iid = queryPrams.get("iid");
  const data = serviceCard.filter((object) => {
    return object.id === parseInt(id);
  });
  const object1 = data[0];

  const data1 = data[0].item.find((item) => item.id === parseInt(iid));
  const object = data1;

  return (
    <>
      <div className="selected-container">
        <div className="selected-box">
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
          {/* <div className="relatedList-main-box">
          {object1.item.slice(-4).map((sele)=>(
          <div key={sele.id}>
<p>{sele.name}</p>
<p>{sele.nichols}
</p>
          </div>
        ))}
          </div>  */}
        </div>
      </div>
    </>
  );
}

export default ServiceCardDetail;