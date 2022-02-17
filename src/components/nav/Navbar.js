// import React from 'react';
// import {useState} from 'react'
// import {CgMenuRightAlt} from 'react-icons/cg'
// import {Link} from 'react-router-dom'
// import './nav.css'


// const Navbar = () => {
//     const[IsOpen ,SetIsOpen] = useState(false);
//   return <>
//   <div className="menu-btn">
//       <button onClick={()=>SetIsOpen(!IsOpen)}>
//           <CgMenuRightAlt/>
//       </button>
//   </div>
//   {IsOpen &&(
//       <header className='header open'>
// <nav>
//     <ul>
//         <li onClick={()=>SetIsOpen(false)}>
//             <Link to='/'>homepage</Link>
//         </li>
//         <li onClick={()=>SetIsOpen(false)}>
//             <Link to='/about'>About</Link>
//         </li>
//         <li onClick={()=>SetIsOpen(false)}>
//             <Link to='/services'>service</Link>
//         </li>
//         <li onClick={()=>SetIsOpen(false)}>
//             <Link to='/contact'>contact</Link>
//         </li>
//         <li></li>
//     </ul>
// </nav>
//       </header>
//   )}
//   </>;
// };

// export default Navbar;


import React, { useState } from "react";
import "./nav.css";
 import {Link} from 'react-router-dom'

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <div className="nav__brand">
        herdoy
      </div>
      <ul className={active}>
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link  to="/about" className="nav__link">
            About
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/services" className="nav__link">
            services
          </Link>
        </li>
        <li className="nav__item">
          <Link to ="/contact" className="nav__link">
            contact
          </Link>
        </li>
     
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;