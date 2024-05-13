import React from 'react';
import './Email.css';


const Email = () => {
  return (
    <div className='email'>
        <div className='email-content'>
            <h4>DON'T MISS OUT</h4>
            <h1><span className='email-htext'>Subscribe To Our </span> Newsletter</h1>
            <p>Stay in the snack loop and never miss a delicious update! Subscribe to our newsletter and be<br/>
            the first to know about new arrivals, exclusive offers, and tasty promotions. Join our snacking<br/>
            community and indulge in a world of flavor straight to your inbox. Don't let the best snacks<br/> slip away
            - subscribe now and treat your to a regular dose of snacking goodness.</p>

            <form className='email-search'>
                <div>
                    <input type='text' placeholder='Enter your email' />
                </div>
                <button type='submit' className='email-btn'>Subscribe</button>
            </form>
        </div>

        

    </div>
  )
}

export default Email