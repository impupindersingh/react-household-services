import React from 'react'
import './Blogform.css'

function Blogform() {
  return (
    <div className='comment-form-container'>
      <p className='reply-heading'>Leave a Reply</p>
      <p className='email-desc'>Your email address will not be published.</p>
      <form>
        <div className='comment-input'>
<p>comment*</p>
<textarea className='custom-textarea'/>
        </div>
        <div className='name-input'>
        <p>Name*</p>
<input type='text' className='form-input-box' />
        </div>
        <div className='email-input'>
        <p>email*</p>
<input type='text' className='form-input-box'/>
        </div>
        <div className='checkbox-input'>
          <input type='checkbox'/>
          <p>Save my details for the next time.</p>
        </div>
        <div className='comment-btn'>
        <button>comment </button>
        </div>
      </form>
    </div>
  )
}

export default Blogform;