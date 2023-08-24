import React, { useState,useEffect } from 'react'
import './Review.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const name=['priyanshu1','priyanshu2','priyanshu3']
const review=['wonderful house design wonderful interior designer','wonderful interior designer wonderful interior designer','Wonderful Architect wonderful interior designer']
const l=['<','>']
const Review = () => {
    const[count,setCount]=useState(0);
    const incre = () =>{
        if(count+1<name.length)
        setCount(count+1)
        else
        setCount(0)
    }
    const decre = () =>{
        if(count-1>=0)
        setCount(count-1)
        else
        setCount(name.length-1)
    }
    useEffect(()=>{
        Aos.init({duration: 20000})
      },[])
  return (

    <div className='review flex'>
       <div className="review-text">
           <h1 data-aos='fade-up' data-aos-duration='2550'><span className="color">Genuine </span> Review <br /> of Our <span className="color">Client's</span></h1>
            <p data-aos='fade-up' data-aos-duration='2550'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam consequuntur fuga tenetur ab, itaque accusantium corrupti magni veniam soluta quaerat!</p>
           </div>
           <div className="review-content" data-aos='fade-up' data-aos-duration='2550'>
            <div className="box flex iv">
            <h1>{name[count]}</h1>
                <p>{review[count]}</p>
            </div>
            <div className="buttons " data-aos='fade-up' data-aos-duration='4000'>
                <button className='btn' onClick={decre}>{l[0]}</button>
                <button className='btn' onClick={incre}>{l[1]}</button>
            </div>
           </div>
    </div>
  )
}

export default Review