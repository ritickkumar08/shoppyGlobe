import React from 'react'
import { FaShopify } from "react-icons/fa"
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

import { NavLink } from "react-router-dom"

function Header() {
    return (
        <nav className="fixed inset-x-0 top-0 z-50 backdrop-blur-sm shadow-md">
            <div className='flex justify-between items-center max-w-4/5 mx-auto transition-all duration-300'>
                {/* icon or logo */}
                <NavLink to='/' 
                className='flex items-center text-6xl p-3 font-semibold'>
                    <FaShopify className=' text-rose-400'/>Globe
                </NavLink>
    {/*className={({isActive}) =>`text-3xlcursor-pointer hover:border-b ${isActive ? "text-amber-400":"text-amber-100"}`} */}

                {/* pages navigation button */}
                <div className='flex items-center gap-6 text-2xl font-semibold'>
                    {/* home buttton */}
                    <NavLink to='/' className={({isActive})=> `hover:border-b-2  ${isActive ? "text-rose-400 border-b-2 text-3xl" : ""}`}>Home</NavLink>
                    {/* products page link */}
                    <NavLink to='/Products' className={({isActive})=> `hover:border-b-2 ${isActive ? "text-rose-400 border-b-2 text-3xl" : ""}`}>Products</NavLink>
                    {/* checkout page link */}
                    <NavLink to='/CheckOut' className={({isActive})=> `hover:border-b-2 ${isActive ? "text-rose-400 border-b-2 text-3xl" : ""}`}>Checkout</NavLink>
                </div>

                {/* two buttons one for mode and the other is cart */}
                <div className='flex items-center text-2xl gap-5'>
                    {/* button to switch between light and dark mode */}
                    <button>
                        <MdOutlineLightMode />
                        {/* <MdOutlineDarkMode /> */}
                    </button>
                    {/* the button to navigate to the cart */}
                    <NavLink to='cart'
                    className={({isActive})=> `hover:border-b-2 ${isActive ? "text-3xl" : ""}`}>
                        <FaShoppingCart/>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Header
