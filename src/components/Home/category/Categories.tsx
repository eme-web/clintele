import React from 'react'
import { Item, items as sampleItems } from "./Items";
import './Categories.css';
import { ImageMap } from "./ImageImport";
import PastryImage from '../../../assets/pastries.png';
import PizzaImage from '../../../assets/pizza.png';
import CakeImage from '../../../assets/cake.png';
import DrinksImage from '../../../assets/drinks.png';
import BurgerImage from '../../../assets/burger.png';
import StarRating from '../../../assets/Star.png';
import Shopping_bag from '../../../assets/shopping-bag.png';

const Categories = () => {
    const itemsToShow: Item[] = sampleItems

  return (
    <div className='categories'>
      <h4>What We Sell</h4>
      <h2>All <span>Categories</span></h2>
      <div className="image-container">
        <div className="img-1 image-cards">
          <img className='img-1' src={PastryImage} />
          <h5>Pastries</h5>
        </div>
        <div className="image-cards">
          <img src={CakeImage} />
          <h5>Cake</h5>
        </div>
        <div className="image-cards">
          <img src={BurgerImage} />
          <h5>Burger</h5>
        </div>
        <div className="image-cards">
          <img src={PizzaImage} />
          <h5>Pizza</h5>
        </div>
        <div className="image-cards">
          <img src={DrinksImage} />
          <h5>Drinks</h5>
        </div>
      </div>

      <div className="cat-heading">
        <h3>Pastries</h3>
        <button className='cat-btn'>View All</button>
      </div>

      <div className="categories-parent">
            <div className="categories-parent-container">
              {itemsToShow.map((item) => (
                <div
                  key={item.id}
                  className="categories-items-cards"
                >
                  <div className="categories-img">
                    {item.imageUrl && (
                      <img
                        src={ImageMap[item.imageUrl as string]}
                        alt={item.name}
                      />
                    )}
                  </div>

                  <div className="categories-items-details-container">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="categories-item-amount">
                      <span className="categories-item-amount-deco">
                        {item.oldamount}
                      </span>{" "}
                      <span className='categories-item-amount-new'>{item.newamount}</span>
                    </div>
                    <div className="categories-viewdetails-icon">
                      <button className="categories-viewdetails-btn">
                        View Details
                      </button>
                      <button className="categories-viewdetails-shoppingbag-btn">
                        <img src={Shopping_bag} />
                      </button>
                      <div className="rating">
                        {Array.from({ length: item.rating }, (_, index) => (
                          <span key={index}><img src={StarRating} /></span>
                        ))}
                        <span className='count'>{item.reviewsCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      
        

    </div>
  )
}




export default Categories