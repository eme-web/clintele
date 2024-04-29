import React from 'react';
import Image from '../assets/Images/hero.png'

const Hero = () => {
    return (
        <div>
            <div className="max-w-[100%] container mt-[1rem] lg:mt-[4rem] mx-auto grid md:grid-cols-2 gap-8" >
                <div className="w-full flex flex-col p-4 my-4">
                    <p className="text-teal-800 uppercase text-[9px]">Eplore, Indulge, Repeat</p>
                    <h1 className='font-bold text-6xl py-[1rem]'>Delivers</h1>
                    <h1 className='text-[#FF7C08] py-[0.5rem] font-bold text-6xl'>Deliciousness</h1>
                    <h1 className='font-bold text-6xl py-[1rem]'>to Your Door</h1>
                    <p className='text-[17px]'>Indulge your taste buds and satisfy your cravings with our vast <br /> selection of delicious snacks. From crispy chips to mouthwatering <br />chcolates, we've got the perfect treats to tickle your palate. <br />Discover a world of flavors, textures, and endless snacking <br />possibilities right at your fingertips.</p>
                    <div className='flex md:mx-0 gap-2 py-[1rem] w-full'>
                        <button className="bg-teal-800 w-full w-[175px] my-6 py-4 text-white">Stop</button>
                        <button className="bg-teal-800 w-full w-[175px] my-6 py-4 text-white bg-[#ff7C08]">Learn More</button>
                    </div>
                </div>
                <div className="w-full flex flex-col">
                    <img className="w-[100%] h-[90%] mx-auto mt-[-2rem]" src={Image} alt="/" />
                </div>
            </div>
        </div>
    )
}

export default Hero