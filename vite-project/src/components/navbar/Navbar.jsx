import React from 'react'
import './Navbar.scss';
import Logo from '../../assets/logo.png';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

import { useState } from 'react';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return <header className='navbar'>
    <nav className="navbar_container wrapped">
      <a href="#" className="navbar_logo" onClick={() => setShowNav(false)}>
        <img src={Logo} alt="logo" />
      </a>
      <ul className={`${showNav ? "show" : "" }`} >
        <li onClick={() => setShowNav(false)}><a href="#"> Product</a></li>
        <li onClick={() => setShowNav(false)} ><a href="#"> Company</a></li>
        <li onClick={() => setShowNav(false)}><a href="#">Pricing </a></li>
        <li onClick={() => setShowNav(false)}><a href="#"> Blog</a></li>
      </ul>
      <div className="navbar_btns">
        <a href="#">Login</a>
        <a href="#" className='btn'>Register</a>
      </div>
      <div className="navbar_menu" onClick={() => setShowNav(!showNav)}>
        {showNav ? <IoMdClose /> : <IoMenu />}
      </div>
    </nav>
  </header>
}

export default Navbar
