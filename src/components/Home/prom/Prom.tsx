import React from 'react'
import './Prom.css';
import cinamon from '../../../assets/cinamon-roll-combo.png'


const Prom = () => {
  return (
    <div className='prom'>
        <div className='prom-container'>
            <img className="" src={cinamon} alt="/" />
            <div className='prom-content'>
                <h4>Deal of the week</h4>
                <h2 className="">Sale off 10%</h2>
                <p className="">On all cinnamon rolls combo</p>
                <h3><span>#2000.00 </span> #1800.00</h3>
                <button className="">Shop Now</button>
            </div>
        </div>
    </div>
  )
}

export default Prom