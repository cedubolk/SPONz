import React from 'react';
import {useState} from 'react'
import {CgMenuRightAlt} from 'react-icons/cg'
import {Link} from 'react-router-dom'
import './nav.css'


const Navbar = () => {
    const[IsOpen ,SetIsOpen] = useState(false);
  return <>
  <div className="menu-btn">
      <button onClick={()=>SetIsOpen(!IsOpen)}>
          <CgMenuRightAlt/>
      </button>
  </div>
  {IsOpen &&(
      <header className='header open'>
<nav>
    <ul>
        <li onClick={()=>SetIsOpen(false)}>
            <Link to='/'>homepage</Link>
        </li>
        <li onClick={()=>SetIsOpen(false)}>
            <Link to='/about'>About</Link>
        </li>
        <li onClick={()=>SetIsOpen(false)}>
            <Link to='/services'>service</Link>
        </li>
        <li onClick={()=>SetIsOpen(false)}>
            <Link to='/contact'>contact</Link>
        </li>
    </ul>
</nav>
      </header>
  )}
  </>;
};

export default Navbar;
