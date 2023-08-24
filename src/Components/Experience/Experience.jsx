import React from 'react'
import './Experience.css'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Experience = () => {
    useEffect(()=>{
        Aos.init({duration: 20000})
      },[])
    return (
        
        <div className='experience'>
            <h1 data-aos='fade-up' data-aos-duration='2550'> <span className='color'> Well-</span>Established & <br /> Experience <span className='color'>in many fields </span></h1>
            <div className="flex">
            <div className="item" data-aos='fade-up' data-aos-duration='2550'>
                <h1>200</h1>
                <h2>Project Completed</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita qui delectus repellendus adipisci ipsa vel a voluptas quaerat fugit repellat.</p>
            </div>
            <div className="item"  data-aos='fade-up' data-aos-duration='2550'>
                <h1>05</h1>
                <h2>Year's Experience</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita qui delectus repellendus adipisci ipsa vel a voluptas quaerat fugit repellat.</p>
            </div>
            <div className="item"  data-aos='fade-up' data-aos-duration='2550'>
                <h1>200</h1>
                <h2>Project Completed</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita qui delectus repellendus adipisci ipsa vel a voluptas quaerat fugit repellat.</p>
            </div>
            </div>
        </div>
    )
}

export default Experience