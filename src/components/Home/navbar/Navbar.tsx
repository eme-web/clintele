import React, { useState } from "react";
import "./Navbar.css"
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
import Toggle from '../../../assets/Toggle.png';
import Logo from "../../../assets/hamburger.svg"




const Navbar = () => {
    const [nav, setNav] = useState<boolean>(false)
  
    return (
        <header className='navbar'>
            <h1><span><img src={Logo} alt='/'/>Snack</span>Haven</h1>
            
            <nav>
                <ul className={nav ? 'menu active' : 'menu'}>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Category</a>
                    </li>
                    <li>
                        <a href="/">About Us</a>
                    </li>
                    <li>
                        <a href="/">Contact Us</a>
                    </li>
                </ul>
            </nav>
            
            <div className='call_num'>
                <h4>Call and Order</h4>
                <h3>08130000000</h3>
            </div>
            
            <div className='iconic'>
                <AiOutlineSearch  size={25} style={{ marginTop: '6px' }} />
                <IoPerson  size={25} style={{ marginTop: '6px' }} />
                <IoBag className='icon' size={25}  />
            </div>
            <div className='toggle'>
                <img src={Toggle}  style={{ marginTop: '6px' }} />
            </div>
                    
            <div onClick={() => setNav(!nav)} className='mobile_btn'>
                {nav ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
            </div>
        </header>
    )
}

export default Navbar