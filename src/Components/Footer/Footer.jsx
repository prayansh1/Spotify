import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
   <div className="big-footer box">
     <div className='footer '>
      <div className="link-sec gray">
        <h3 className='line1'>Quick-links</h3>
        <div className="links ">
          <div className="flex gap">
            <i className='fa-brands fa-whatsapp' ></i>
            <li>Home</li>
          </div>
          <div className="flex gap">
            <i className='fa-brands fa-whatsapp' ></i>
            <li>About</li>
          </div>
          <div className="flex gap">
            <i className='fa-brands fa-whatsapp' ></i>
            <li>Service</li>
          </div>
          <div className="flex gap">
            <i className='fa-brands fa-whatsapp' ></i>
            <li>Projects</li>
          </div>
        </div>
      </div>
      <div className="contact-sec gray">
        <h3 className='line1'>Contact</h3>
        <div className="fot-contact mar">
          <div className="flex gap">
          <i className='fa-brands fa-whatsapp' ></i>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className="flex gap">
          <i className='fa-brands fa-whatsapp' ></i>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className="flex gap">
          <i className='fa-brands fa-whatsapp' ></i>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </div>
      <div className="about-sec gray">
        <h3 className='line1'>About Us</h3>
        <div className="abouts mar">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nesciunt iusto, error inventore assumenda fugit?</p>
        </div>
        <div className="social flex mar">
        <i className='fa-brands fa-whatsapp' ></i>
        <i className='fa-brands fa-whatsapp' ></i>
        <i className='fa-brands fa-whatsapp' ></i>
        <i className='fa-brands fa-whatsapp' ></i>
        </div>
      </div>
    </div>
    <div className="copy flex">
      <h3>All Right reserve by Jk Design</h3>
    </div>
   </div>
  )
}

export default Footer