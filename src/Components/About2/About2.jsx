import React, { useEffect } from 'react'
import './About2.css'
import abt from '../../images/About.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
const About2 = () => {
  useEffect(()=>{
    Aos.init({duration: 20000})
  },[])
  return (

    <div className='about2 ' id='About'>
       <div className="abt-img ">
            <img data-aos='fade-up' data-aos-duration='2500' src={abt} alt="" />
        </div>
        <div data-aos='fade-up' data-aos-duration='2550' className="abt-content ">
            <h3 className='line'>About Us</h3>
            <h1> <span className="color"> Best Designer </span>
           <br /> Architectures For <span className="color">You.</span></h1>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum magnam ut similique obcaecati placeat aspernatur maiores. Porro enim doloremque minima placeat debitis laudantium ea eaque! Molestiae omnis quibusdam impedit dolore.</p>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga quia facilis veritatis corporis ut. Nisi tempore aperiam cupiditate reprehenderit numquam.</p>

          <div className="mar">  <h1 data-aos='zoom-in' data-aos-duration='2550' className='mar '> Jk Design  & Build</h1></div>
        </div>

    </div>
  )
}

export default About2