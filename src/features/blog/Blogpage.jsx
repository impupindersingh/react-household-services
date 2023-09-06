import React from 'react';
import "./Blogpage.css";
import { useNavigate } from "react-router-dom";
import blogCard from '../../data/blogCardData';
import nextIcon from '../../images/blog/blog-card-next-icon.png';

function Blogpage() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(
      {pathname:"/Blog/blogdetail",
      search:`?id=${id}`} 
      )
  }

  return (
    <div className='blog-container'>
      {blogCard.map((items)=>(
        <div key={items.id} className='blog-card-box'>
<div className='blog-img-box'>
<img src={require(`../../images/blog/${items.blogPic}`)} alt='profilePhoto'/>
</div>
<div className='blog-quote-box'>
<p>{items.blogQuote}</p>
</div>
<div className='blog-heading-box'>
<p>{items.blogHeading}</p>
</div>
<div className='blog-desc-box'>
<p>{items.blogDesc}</p>
</div>
<hr className='hrline'/>
<div className='blog-author-box'>
  <div className='author-name'><p>{items.blogAuthor}</p></div>
  <div className='custom-dot'> </div>
<div className='author-comment'><p>{items.comments}</p></div>

<div className="blog-next-icon" onClick={()=> handleClick(items.id)}>
         <img src={nextIcon} alt="nextIcon"/>
        </div>
</div>
        </div>
      ))}
    </div>
  )
}

export default Blogpage;