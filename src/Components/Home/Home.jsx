import React from 'react'
import './Home.css'
import img1 from '../../images/h5.jpeg'
import img2 from '../../images/h4.jpeg'
import img3 from '../../images/p1.jpg'
import Navbar from '../Navbar/Navbar'
import { useState,useEffect } from 'react'
import { motion } from 'framer-motion'
const images=[img1,img2,img3];
const heading=[
  'Interior ',
  'Structural ',
  'Architect '
]
const p=['1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste similique dignissimos eum excepturi expedita tempora eligendi, harum laboriosam placeat quod.'
        ,'2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste similique dignissimos eum excepturi expedita tempora eligendi, harum laboriosam placeat quod. Lorem ipsum dolor sit amet.'
        ,'3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste similique dignissimos eum excepturi expedita tempora eligendi, harum laboriosam placeat quod. Lorem ipsum dolor sit amet.'];
const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
  <div className="home" style={{
    backgroundImage: `linear-gradient(rgba(54, 54, 54, 0.5),rgba(15, 14, 14, 0.6)),url(${images[currentImageIndex]})`,
  }}>
    <Navbar></Navbar>
     <motion.div
        initial={{translateY:40,opacity:[0,0.2,0.5]}}
        animate={{translateY:0,opacity:1}}
        key={currentImageIndex}
        transition={{duration:1.5}}
        className="content">
           <h1><span className='color'>{heading[currentImageIndex]}</span> Design</h1>
            <p>{p[currentImageIndex]}</p>
            <button className='btn'>Let's Connect</button>
        </motion.div>
  </div>

  )
}

export default Home