import React from 'react';
import Logo from '../../../assets/logo-dark 1.png';
import callIcon from '../../../assets/call-calling.png';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { TbMail} from "react-icons/tb";
import { IoCall } from "react-icons/io5";
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='col'>
                <h3><img src={Logo} alt='/'/></h3>
                <p>the ultimate destination for snack<br/> enthusiasts. We are passionate about<br/> bringing you a delectable assortment<br/> of snacks that will satisfy your cravings<br/> and ignite your taste buds.</p>
                <div className='social'>
                    <FaFacebook className='icon' />
                    <FaInstagram className='icon' />
                    <FaTwitter className='icon' />
                </div>
               
            </div>
            <div className='col'>
                <h3>Contact Us</h3>
                <p>570 Ajayi Street, 8th Ave,<br/> Gwarimpa, Abuja</p>
                <p><IoCall /> 08130000000, 09081000000</p>
                <p><TbMail/> grostore.enquiry@gmail.com</p>
            </div>

            <div className='col'>
                <h3>Delivery Support</h3>
                <p><img src={callIcon} alt='/'/> +2348130000000</p>
                <p>Monday-Friday:9:30am-08:00pm</p>
                <p>Saturday-SUnday:11:00am-05:00pm</p>
            
            </div>
            <div className='col'>
                <h3>Quick Links</h3>
                <p>Home</p>
                <p>Categories</p>
                <p>About Us</p>
                <p>Contact Us</p>
            </div>
        </div>

    </div>
  )
}

export default Footer