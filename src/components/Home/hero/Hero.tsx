import React from 'react';
import './Hero.css';
import Image from '../../../assets/hero.png'



const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-content' >
                <div className='hero-text'>
                    <h3 >Explore, Indulge, Repeat</h3>
                    <h1>Delivers<br/><span className='htext'>Deliciousness</span><br/> <span>to Your Door</span></h1>
                    <p>Indulge your taste buds and satisfy your cravings with our vast <br /> selection of delicious snacks. From crispy chips to mouthwatering <br />chcolates, we've got the perfect treats to tickle your palate. <br />Discover a world of flavors, textures, and endless snacking <br />possibilities right at your fingertips.</p>
                    <div className='hero-btn'>
                        <button className='hero-btn1'>Shop Now</button>
                        <button className='hero-btn2'>Learn More</button>
                    </div>
                </div>
                <div className='hero-img'>
                    <img src={Image} alt="/" />
                </div>
            </div>
        </div>
    )
}

export default Hero