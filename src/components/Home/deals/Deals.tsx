import React from 'react';
import './Deals.css';
import { ImageMap } from "../category/ImageImport";
import { Item, items as sampleItems } from "../category/Items";
import Shopping_bag from '../../../assets/shopping-bag.png';
import StarRating from '../../../assets/Star.png';

const Deals = () => {
    const itemsToShow: Item[] = sampleItems

  return (
    <div className='deals'>
      <div className="deals-heading-container">
        <h4 className='deals-heading'>The Best Price</h4>
        <h2>Top <span className='deals-heading2'>Snack</span> Deals</h2>
      </div>
       

        <div className="con-heading">
            <h4>Our Best Deals</h4>
            <button className='deals-btn'>View All</button>
        </div>

        <div className="deals-parent">
            <div className="deals-parent-container">
              {itemsToShow.map((item) => (
                <div
                  key={item.id}
                  className="deals-items-cards"
                >
                  <div className="deals-img">
                    {item.imageUrl && (
                      <img
                        src={ImageMap[item.imageUrl as string]}
                        alt={item.name}
                      />
                    )}
                  </div>

                  <div className="deals-items-details-container">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="deals-item-amount">
                      <span className="deals-item-amount-deco">
                        {item.oldamount}
                      </span>{" "}
                      <span className='deals-item-amount-new'>{item.newamount}</span>
                    </div>
                    <div className="deals-viewdetails-icon">
                      <button className="deals-viewdetails-btn">
                        View Details
                      </button>
                      <button className="deals-viewdetails-shoppingbag-btn">
                        <img src={Shopping_bag} />
                      </button>
                      <div className="deals-rating">
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

export default Deals