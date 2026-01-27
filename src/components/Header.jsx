import React, { useEffect, useState } from 'react'

//icons import 
import { FaShopify } from "react-icons/fa"
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { ImCross } from "react-icons/im";

//react router dom imports 
import { NavLink } from "react-router-dom"
//redux import 
import {useSelector} from 'react-redux'

function Header() {
    const [open,setOpen] = useState(false); //state to handle the mobile menu is open or close

    // Persisted theme state (true = dark)
    const [dark, setDark] = useState(()=>{ //to keep a check on the theme of the webapp
        return localStorage.getItem('theme') === 'dark'
    });
    
    // Total cart quantity from Redux
    const cartQuantity = useSelector(state => state.cart.totalQuantity);

    const cartItems = useSelector((state => state.cart.totalQuantity))
    console.log(cartItems);

    // Apply theme to root element
    useEffect(()=>{
        const root = document.documentElement
        if(dark){
            root.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        }else{
            root.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    },[dark])

    // // Close mobile menu when switching to desktop view
    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth >= 768) setOpen(false);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <nav className="fixed inset-x-0 top-0 z-50 backdrop-blur-sm shadow-md transition-colors">
            <div className='flex justify-between items-center max-w-7xl mx-auto px-4'>
                {/* icon or logo */}
                <NavLink to='/' 
                className='flex items-center text-2xl sm:text-6xl p-3 font-semibold dark:text-dark-primary'>
                    <FaShopify className=' text-rose-400 mr-1'/>Globe
                </NavLink>
                {/* pages navigation button */}
                <div className='hidden md:flex items-center gap-6 text-2xl font-semibold'>
                    {/* home buttton */}
                    <NavLink to='/' className={({isActive})=> `hover:border-b-2  ${isActive ? "text-rose-400 border-b-2 text-3xl" : ""}  hover:text-light-primary `}>Home</NavLink>
                    {/* products page link */}
                    <NavLink to='/Products' className={({isActive})=> `hover:border-b-2 ${isActive ? "text-rose-400 border-b-2 text-3xl" : ""} hover:text-light-primary `}>Products</NavLink>
                    {/* checkout page link */}
                    <NavLink to='/CheckOut' className={({isActive})=> `hover:border-b-2 ${isActive ? "text-rose-400 border-b-2 text-3xl" : ""} hover:text-light-primary `}>Checkout</NavLink>
                </div>

                {/* two buttons one for mode and the other is cart */}
                <div className='flex items-center text-2xl gap-5'>
                    {/* button to switch between light and dark mode */}
                    <button
                        onClick={() => setDark((prev) => !prev)}
                        className="p-2 rounded-lg"
                        aria-label="Toggle theme"
                    >
                    {dark ? (
                        <MdOutlineLightMode className="w-5 h-5 text-yellow-500" />
                        ) : (
                        <MdOutlineDarkMode className="w-5 h-5 text-slate-600" />
                        )}
                    </button>
                    {/* the button to navigate to the cart */}
                    <NavLink to='/cart'
                    className={({isActive})=> `relative hover:border-b-2 ${isActive ? "text-3xl text-rose-400" : ""} `}>
                        <FaShoppingCart/>
                        {cartQuantity > 0 && (
                            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-rose-500 text-xs flex items-center justify-center text-white">
                                {cartQuantity}
                            </span>
                            )}
                    </NavLink>

                    {/* MOBILE MENU BUTTON */}
                    <button
                    onClick={() => setOpen(true)}
                    className="md:hidden p-2 rounded-lg"
                    aria-label="Open menu">
                        <FiMenu className="text-xl" />
                    </button>
                </div>
            </div>

            {/* MOBILE OVERLAY */}
            {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-72 bg-light-surface dark:bg-dark-surface shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <span className="font-bold">Menu</span>
              <button onClick={() => setOpen(false)}>
                <ImCross />
              </button>
            </div>

            <div className="flex flex-col gap-2 p-4 font-semibold">
              <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
              <NavLink to="/products" onClick={() => setOpen(false)}>Products</NavLink>
              <NavLink to="/checkout" onClick={() => setOpen(false)}>Checkout</NavLink>
              <NavLink to="/cart" onClick={() => setOpen(false)}>
                My Cart ({cartQuantity})
              </NavLink>
            </div>
          </div>
        </div>
      )}
        </nav>
    )
}

export default Header
