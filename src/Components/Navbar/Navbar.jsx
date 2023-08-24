import React, { useEffect, useState } from 'react'
import logo from '../../images/logo.png' 
// import { BrowserRouter as Router , Route,Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  const[scroll,setScroll]=useState(false)
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(()=>{
    
    const handelScroll =()=>{
      if(window.scrollY > 50)
      {
        setScroll(true);
        console.log(scroll)
      }
      else{
        setScroll(false);
        console.log(scroll)
      }
    };
    window.addEventListener('scroll',handelScroll);
    return ()=>{
      window.removeEventListener('scroll',handelScroll);
    }
  },[]);
  return (
    
      <div className={`navbar ${ scroll ? 'scroll' : ''} `}>
       <div className="logo">
        {/* <img src={logo} alt="" /> */}

        <h1>Edu</h1>
       </div>
        <ul  className={`menulist ${isOpen ? 'visible' :''}`}>
            {/* <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Service">Service</Link></li>
            <li><Link to="/Projects">Project</Link></li>
            <li><Link to="/Contact">Contact</Link></li> */}
        </ul>
        <div className='menu-icon'>
          <i className={` ${isOpen ? 'fa-sharp fa-solid fa-house-chimney' :'fa-solid fa-phone'}`} onClick={toggleMenu}></i>
        </div>
    </div>

  )
}

export default Navbar