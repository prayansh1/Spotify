import React from 'react'
import { useEffect } from 'react'
import './Choose.css'
import cs1 from '../../images/h6.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Choose = () => {
    useEffect(()=>{
        Aos.init({duration: 20000})
      },[])
    return (
        <div className='choose'>
            <h1 data-aos='zoom-in' data-aos-duration='2550'><span className="color" >Why</span> Us!!</h1>
            <div className="box flex" data-aos='fade-up' data-aos-duration='2550'>
                <div className="left-choose">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum in laudantium commodi repellendus nam dignissimos facere facilis sint totam error.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="per mar">
                       <div className="text flex">
                       <h3>Structural design</h3>
                        <h3>75%</h3>
                       </div>
                        <div className="good"></div>
                    </div>
                    <div className="per ">
                       <div className="text flex">
                       <h3>Structural design</h3>
                        <h3>75%</h3>
                       </div>
                        <div className="good"></div>
                    </div>
                    <div className="per ">
                       <div className="text flex">
                       <h3>Structural design</h3>
                        <h3>75%</h3>
                       </div>
                        <div className="good"></div>
                    </div>
                    <div className="per ">
                       <div className="text flex">
                       <h3>Structural design</h3>
                        <h3>75%</h3>
                       </div>
                        <div className="good"></div>
                    </div>
                </div>
                <div className="right-choose" data-aos='zoom-in-up' data-aos-duration='2550'>
                    <img src={cs1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Choose