import { useEffect, useState } from "react";
import Mask from '../assets/Mask.svg';
import { BsPersonFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { AiFillShopping } from "react-icons/ai";
import { MdToggleOff } from "react-icons/md";




export const Header = () => {


    return (
        <header>
            <nav className="bg-white border ">
                
            <div className=" flex bg-[#FAF2E9 z-0 w-full lg:px-[3rem] px-[1.5rem justify-between">
                <div className='flex p-1'>
                    <img src={Mask} className='h-11' alt="Capfields Evolve Logo" />
                    <strong className="text-orange-400 mt-2 pl-2">Snack</strong><span className="font-bold text-dark-600 mt-2 pl-1">Haven</span>
                    <ul className='flex text-center font-semibol md:flex cursor-pointer'>
                        <li className='p-3 font-[2px] hover:text-[#050580] mb-3'>Home</li>
                        <li className='p-3 font-[2px] hover:text-[#050580]'>Categories</li>
                        <li className='p-3 font-[2px] hover:text-[#050580]'>About Us</li>
                        <li className='p-3 font-[2px] hover:text-[#050580]'>Contact Us</li>
                    </ul>
                </div>
                <div className="flex  ">
                    <div className='text-black flex flex-col items-center'>
                        <span className="text-xs mr-1">call and order</span>
                        <strong className="text-orange-400">08130000000</strong>

                    </div>
                  
                </div>
                <div className="flex justify-between mt-5 pl-3">
                    <div className='text-black flex  justify-between items-center'>
                        <div className=" pl-2">
                            <CiSearch />
                        </div>
                        <div className="pl-2">
                            <BsPersonFill />
                        </div>
                        <div className="pl-2">
                            <AiFillShopping />
                        </div>
                           
                               
                            
                    </div>
                    <div className="flex pt-4">
                        
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" checked />
                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                        </label>

                    </div>
                </div>


            </div>

            </nav>
            

        </header>
    )
}