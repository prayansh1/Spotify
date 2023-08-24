import React from 'react'
import { useEffect } from 'react'
import './Service.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Service = () => {
  useEffect(()=>{
    Aos.init({duration: 20000})
  },[])
  return (
    <div className='service' >
         <h1 data-aos='fade-up' data-aos-duration='2550'><span  className="color">Best</span> Services<br /> We're <span className="color">Providing</span></h1>
        <div className="flex" >
            <div className="box" data-aos='fade-up' data-aos-duration='2550'>
            <h1 className='line1'>Architectural</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatibus voluptas eligendi fugit et aliquid eaque repellat deserunt beatae placeat, quod nesciunt tempora nostrum earum laudantium.</p>
            <div className='last flex'><button className='btn'>Read More</button></div>
            </div>
            <div className="box" data-aos='fade-up' data-aos-duration='2550'>

            <h1 className='line1'>Architectural</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatibus voluptas eligendi fugit et aliquid eaque repellat deserunt beatae placeat, quod nesciunt tempora nostrum earum laudantium.</p>
            <div className='last flex'><button className='btn'>Read More</button></div>
            </div>
           
        </div>
        <div className="flex">
            <div className="box"  data-aos='fade-up' data-aos-duration='2550'>
            <h1 className='line1'>Architectural</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatibus voluptas eligendi fugit et aliquid eaque repellat deserunt beatae placeat, quod nesciunt tempora nostrum earum laudantium.</p>
            <div className='last flex'><button className='btn'>Read More</button></div>
            </div>
            <div className="box"  data-aos='fade-up' data-aos-duration='2550'>

            <h1 className='line1'>Architectural</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatibus voluptas eligendi fugit et aliquid eaque repellat deserunt beatae placeat, quod nesciunt tempora nostrum earum laudantium.</p>
            <div className='last flex'><button className='btn'>Read More</button></div>
            </div>
           
        </div>
    </div>
  )
}

export default Service