import React from 'react'
import './Projects.css'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import img from '../../images/About.jpg'
const Projects = () => {
    useEffect(()=>{
        Aos.init({duration: 20000})
      },[])
    return (
        <div className='project'>
            <h1 data-aos='fade-up' data-aos-duration='2550'><span className="color">Portfolio Of</span> Our <br />Successfull <span className="color">Projects</span></h1>
            <div className=" flex">
                <div className="element ">
                    <div className="img " data-aos='zoom-in-up' data-aos-duration='2550'>
                        <img src={img} alt="" />
                    </div>
                    <div className=" box rit" data-aos='fade-up' data-aos-duration='2550'>
                        <h1>Ram'House</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, voluptate?</p>
                    </div>

                </div>
                <div className="element ">
                    <div className="img" data-aos='zoom-in-up' data-aos-duration='2550'>
                        <img src={img} alt="" />
                    </div>
                    <div className=" box rit" data-aos='fade-up' data-aos-duration='2550'>
                        <h1>Ram'House</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, voluptate?</p>

                    </div>
                </div>
            </div>
            <div className="flex mar">
                <div className="element rev">
                    <div className="img " data-aos='zoom-in-up' data-aos-duration='2550'>
                        <img src={img} alt="" />
                    </div>
                    <div className="pro-content box " data-aos='fade-up' data-aos-duration='2550'>
                        <h1>Ram'House</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, voluptate?</p>
                    </div>

                </div>
                <div className="element rev">
                    <div className="img" data-aos='zoom-in-up' data-aos-duration='2550'>
                        <img src={img} alt="" />
                    </div>
                    <div className="pro-content box" data-aos='fade-up' data-aos-duration='2550'>
                        <h1>Ram'House</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, voluptate?</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects