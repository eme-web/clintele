import React from 'react';
import PostPics from '../../../assets/PostPics.png';
import DelPics from '../../../assets/Delivery.png';
import './Who.css'



const Who = () => {
  return (
    <div className='who'>
        <div className="container-1">
            <div className="image-1">
                <img src={PostPics} alt='/'/>
            </div>
            <div className="info-1">
                <h4>Who Are We ?</h4>
                <h1>Snacks That makes A <br/> <span>Difference</span></h1>
                <p>Welcome to the ultimate destination for snack enthusiasts. We are passionate<br/> about bringing you a delectable assortment of snacks that will satisfy your
                <br/> cravings and ignite your tast buds.<br/> We understand the love Nigerians have for snacks. It's an integral part of our <br/> culture, bringing people together in moments of joy, celebration, and <br/> togetherness, We are dedicated to showcasing the iverse array of snacks that <br/> our country has to offer, from traditional favorites to hidden gems from local<br/> artisans.<br/>
                 We are more than just an online store; it's a celebration of Nigerian snacks and <br/> the people who create them. We are dedicated to preserving and sharing the <br/> flavors that have been passed down through generations, allowing you to savor <br/> a piece of our cultural tapestry with every bite.</p>

                <button className='btn-1'>Shop Now</button>
            </div>
        </div>

        <div className="container-2">
            <div className="info-2">
                <h4>Fast Delivery</h4>
                <h2>No More <span>Waiting</span></h2>
                <p>Snacks at your doorstep, faster than you can say 'hungry'.<br/>
                We prioritize your cravings and understand the need for quick satisfaction. That's <br/>
                why we offer lightning-fast delivery, bringing your favorite snacks right to your <br/> door in record time. No more waiting, no more delays, Order now and experience <br/> the thrill of our speedy snack delivery service.<br/>
                <span>Hungry minds can't wait, and neither do we!</span></p>
                <button className='btn-2'>Shop Now</button>

            </div>
            

            <div className="image-2">
                <img src={DelPics} alt='/'/>
            </div>
        </div>
      

    </div>
  )
}

export default Who