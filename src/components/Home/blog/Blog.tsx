import React from 'react'
import './Blog.css';
import Profile from '../../../assets/profile.png';
import DrinkRating from '../../../assets/Drink-rating.png';
import FruitDrink from '../../../assets/Fruit-drink.png';
import Smoothie1 from '../../../assets/Smoothie1.png';
import Smoothie2 from '../../../assets/Smoothie2.png';
import Quote from '../../../assets/quotes.png';


const Blog = () => {
  return (
    <div className='blog'>
        <div className='container'>
            <div className="grid-container">
                <img className='span-2 image-grid' src={DrinkRating} alt='/'/>
                <img className='span-2 image-grid-1' src={FruitDrink} alt='/' />
                <img className='span-2 image-grid-2' src={Smoothie1} alt='/' />
                <img className='span-2 image-grid-3' src={Smoothie2} alt='/' />
            </div>
            <div className='content'>
                <h1>Fruit Drinks Help Your<br/> Harmonious & <span> Relation <br/> Health </span></h1>
                <div className='review'>
                    <img src={Profile} alt='/' />
                    <p>They Who Drink health Will think <img className='image-icon' src={Quote} /> <br/> Better</p>
                </div>
                <button className='btn'>See All Drinks</button>
            </div>
            
        </div>

    </div>
  )
}

export default Blog