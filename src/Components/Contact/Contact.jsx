import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='contact'>
        <h1><span className="color">Let's </span> Discuss<br /> Our New <span className="color">Project</span></h1>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam nesciunt obcaecati ullam, aliquid autem voluptatem </p>
       <div className="big flex">
        <div className="box">
        <div className="mini flex">
          <i className='fa-sharp fa-solid fa-house-chimney'></i>
          <h1><span className="color">Home</span> <br /> Address</h1>
          </div>
          <div className="inner">
         <p>334 -1K, Shivaji Park,</p>
          <p>Alwar, Rajasthan.</p>
         </div>
         <div className="last flex">
       <button className='btn'>Get Direction</button>
       </div>
        </div>
        <div className="box">
        <div className="mini flex">
        <i className='fa-solid fa-phone'></i>
          <h1><span className="color">Contact</span> <br /> Number</h1>
          </div>
          <div className="inner">
          <p> 8003467171</p>
          <p>7014795162</p>
         </div>
         <div className="last flex">
       <button className='btn'>Make Call</button>
       </div>
        </div>
        <div className="box">
        <div className="mini flex on">
        <h1 className='color'>Socially</h1>
          <h1>Active</h1>
          </div>
         <div className="icon flex">
         <i className='fa-solid fa-phone'></i>
         <i className='fa-solid fa-phone'></i>
         </div>
         <div className="icon flex">
         <i className='fa-solid fa-phone'></i>
         <i className='fa-solid fa-phone'></i>
         </div>
         <div className=" icon flex center">
         <i className='fa-solid fa-phone'></i>
         </div>
        </div>
       </div>
    </div>
  )
}

export default Contact