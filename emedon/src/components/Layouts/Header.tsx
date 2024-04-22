import { useState } from "react";
import Logo from '../../assets/logo.svg';
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";



export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOn, setIsOn] = useState(false);
    return (
        <header>

            <div className=" flex bg-[#FAF2E9 z-0 w-full lg:px-[3rem] px-[1.5rem justify-between">
                <div className='flex p-1'>
                    <img src={Logo} className='h-11' alt="Capfields Evolve Logo" />
                    <ul className='flex text-center font-semibol md:flex cursor-pointer'>
                        <li className='p-3 font-[2px] hover:text-[#050580] mb-3'>Home</li>
                        <li className='p-3 font-[2px] hover:text-[#050580]'>Shop</li>
                        <li className='p-3 font-[2px] hover:text-[#050580]'>Laundry</li>
                    </ul>
                </div>
                <div className="flex border rounded-2xl border border-gray-300 ">
                    <div className='text-black flex flex-col items-center'>
                        <button onClick={() => setIsOpen((prev) => !prev)} className='p-5 pl-2 w-full flex items-center text-[15px] text-black cursor-pointer border-1 border-transparent font-semibold text-lg tracking-wider'>
                            <div className="flex justify-between items-center">
                                <h1 className=" pt-[-4rem]">All</h1>
                                {!isOpen ? (
                                    <RiArrowDropUpLine size={40} />
                                ) : (
                                    <RiArrowDropDownLine size={40} />
                                )}
                            </div>
                        </button>
                        {isOpen && (
                            <div className=' w-ful'>
                                <ul>
                                    <li className='p-1 '>Join Us</li>
                                    <li className='p-1 '>Login</li>
                                    <li className='p-1 '>Help Center</li>
                                </ul>
                            </div>
                        )}

                    </div>
                    <div className="flex mt-5 p-2 my-5">
                        <div className="relative w-full items-center">
                                <span className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"><IoSearchOutline /></span>
                            <input  name="search" type="text" id="simple-search" className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="Search for products..." autoComplete="off" />
                        </div>
                        <div>
                            <button type="submit" className="bi bi-search h-10 px-2 py-[-2rem] w-full text-sm font-medium text-white bg-pink-700 rounded-lg border ">
                                Search</button>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className='text-black flex flex-col items-center'>
                        <button onClick={() => setIsOn((prev) => !prev)} className='p-5 pl-2 w-full flex items-center text-[15px] text-black cursor-pointer border-1 border-transparent font-semibold text-lg tracking-wider'>
                            <div className="flex justify-between items-center pl-2">
                                <IoPersonOutline />
                                {!isOn ? (
                                    <RiArrowDropUpLine size={40} />
                                ) : (
                                    <RiArrowDropDownLine size={40} />
                                )}
                            </div>
                        </button>
                        {isOn && (
                            <div className=' w-ful'>
                                <ul>
                                    <li className='p-1 '>Join Us</li>
                                    <li className='p-1 '>Login</li>
                                    <li className='p-1 '>Help Center</li>
                                </ul>
                            </div>
                        )}

                    </div>
                    <div className="flex pt-4">
                        <FaRegHeart className="pt-4" size={35} />
                        <div className="flex justify-between p-3 ">
                            <h2>Cart</h2>
                            <AiOutlineShoppingCart className="pl-2" size={25} />

                        </div>
                    </div>
                </div>


            </div>

        </header>
    )
}