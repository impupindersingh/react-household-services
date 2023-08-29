import React from "react";
import "./BlogDetail.css";
import blogCard from "../../data/blogCardData";
import previousIcon from "../../images/blog/blog-previous-icon.png";
import nextIcon from "../../images/blog/blog-card-next-icon.png";
import Blogform from "./component/blogform/Blogform";
import leftBackgroundLine from "../../images/blog/blogdetail-leftline.png";
import rightBackgroundLine from "../../images/blog/blogdetail-rightline.png";
import { LuReply } from 'react-icons/lu';

function BlogDetailpage() {
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");
  const data = blogCard.filter((item) => {
    return item.id === parseInt(id);
  });
  const product = data[0];
  return (
    <div className="blog-detail-container">
      <div className="blog-detail-box">
      <img src={leftBackgroundLine} alt="" className="blog-background-leftline"/>
          <img src={rightBackgroundLine} alt="" className="blog-background-rightline"/>
        <div className="category-detail-box">
          <div className="quote-box">
            <p>{product.blogQuote}</p>
          </div>
          <div className="heading-detail-box">
            <p>{product.blogHeading}</p>
          </div>
          <div className="author-detail-box">
            <div className="author-detail-name">
              <p>{product.blogAuthor}</p>
            </div>
            <div className="dot"> </div>
            <div className="author-detail-comment">
              <p>{product.comments}</p>
            </div>
          </div>
        </div>
      </div>
      {product.blogProfile.map((item) => (
        <div className="section1-detail-container">
          <div className="section1-detail-box">
            <div className="image-detail-box">
              <img
                src={require(`../../images/blog/${item.imgsrc}`)}
                alt="rajat"
              />
            </div>
            <div className="summary1-detail-box">
              <p>{item.blogSummary}</p>
            </div>
            <div className="summary2-detail-box">
              <p>{item.blogSummary}</p>
            </div>
            <div className="desc-detail-box">
              <p>{item.aboutBlog}</p>
            </div>
            <div className="btn-detail-box">
              <button>guide</button>
              <button>references</button>
              <button>tutorials</button>
            </div>
            <div className="prev-next-btn">
              <div className="prev-btn-box">
                <div className="prev-icon-box">
                  <img src={previousIcon} alt="previous-icon-pic" />
                </div>
                <div>
                  <p>Get your furniture assemble in...</p>
                </div>
              </div>
              <div className="next-btn-box">
                <div>
                  <p>Top design ideas for your.....</p>
                </div>
                <div className="next-icon-box">
                  <img src={nextIcon} alt="next-icon-box" />
                </div>
              </div>
            </div>
            <div className="comment-heading">
              <p>comments</p>
            </div>
            <Comments/>
            <Comments/>
<Blogform/>
          </div>
        </div>
      ))}
    </div>
  );


  function Comments(){
    return(
      <>
      {product.blogProfile.map((comment)=>(
        <div className="comment-detail-box">
              <div className="profile-desc-box">
                <div>
                  <img
                    src={require(`../../images/blog/${comment.commentProfileImg}`)}
                    alt="profile-pic"
                  />
                </div>
                <div>
                  <div className="profile-name">
                    <p>{comment.profileName}</p>
                  </div>
                  <div className="comment-date">
                    <p>{comment.commentDate}</p>
                    <p><LuReply className="reply-icon"/>reply</p>
                  </div>
                </div>
              </div>
              <div className="comment-desc">
                <p>{comment.desc}</p>
              </div>
            </div>
      ))}
      </>
    )
  }
}

export default BlogDetailpage;
