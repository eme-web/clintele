import React from 'react';
import deliver from '../../../assets/DeliveryIcon.png';
import pay from '../../../assets/PaymentIcon.png';
import support from '../../../assets/SupportIcon.png';
import './Card.css';

const Cards = () => {
  return (
    <div className='cards'>
      <div className='cards-container'>
        <img src={deliver} alt='/' />
        <h1>Fast Delivery</h1>
        <p>Have your snacks delivered at your doorstep, <br/> fast than you can say 'hungry'</p>
      </div>
      <div className='cards-container'>
        <img src={pay} alt='/' />
        <h1>Safe, Secure, Payment</h1>
        <p>Shop with confidence, knowing that we <br/> provide a safe and secure payment</p>
      </div>

      <div className='cards-container'>
        <img src={support} alt='/' />
        <h1>24/7 Support</h1>
        <p>We're here for you around the clock, ready to <br/> assist with any snacking inquiries</p>
      </div>

      
  

    </div>
  )
}

export default Cards