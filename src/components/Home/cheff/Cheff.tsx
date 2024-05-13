import React from 'react'
import './Cheff.css';
import {ImageList} from './CImage';
import { Item, items as sampleItems } from "./Citems";
import ChefImg from '../../../assets/chef.png';
import ChefCombo from '../../../assets/chef-combo.png';
import ShoppingBag from '../../../assets/shopping-bag.png'
import StarRating from '../../../assets/Star.png'

const Cheff = () => {
    const listItems: Item[] = sampleItems

  return (
    <div className='cheff'>
        <div className="image-container">
            <img src={ChefImg} />
            <div className="img-combo">
                <img src={ChefCombo} />
            </div>
            <h5>Otor John Stephen</h5>
            <p>Chef Officer</p>
        </div>

        <div>
            <p>Our CHEF</p>
            <h3>We Server <br /><span>Deliciousness</span></h3>
        </div>

        <div className="cheff-parent">
            <div className="cheff-parent-container">
              {listItems.map((item) => (
                <div
                  key={item.id}
                  className="cheff-items-cards"
                >
                  <div className="cheff-img">
                    {item.imageUrl && (
                      <img
                        src={ImageList[item.imageUrl as string]}
                        alt={item.name}
                      />
                    )}
                  </div>

                  <div className="cheff-items-details-container">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="cheff-item-amount">
                      <span className="cheff-item-amount-deco">
                        {item.oldamount}
                      </span>{" "}
                      <span className='cheff-item-amount-new'>{item.newamount}</span>
                    </div>
                    <div className="cheff-viewdetails-icon">
                      <button className="cheff-viewdetails-btn">
                        View Details
                      </button>
                      <button className="cheff-viewdetails-shoppingbag-btn">
                        <img src={ShoppingBag} />
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


export default Cheff