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
    const [dark, setDark] = useState(()=>{ //to keep a check on the theme of the webapp
        return localStorage.getItem('theme') === 'dark'
    });
    
    const cartItems = useSelector((state => state.cart.totalQuantity))
    console.log(cartItems);
    

    //to choose for the dark and light theme
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

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth >= 768) setOpen(false);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <nav className="fixed inset-x-0 top-0 z-50 backdrop-blur-sm shadow-md dark:dark-shadow-md dark:border-dark-border dark:bg-dark-surface transition-colors">
            <div className='flex justify-between items-center max-w-4/5 mx-auto transition-all duration-300'>
                {/* icon or logo */}
                <NavLink to='/' 
                className='flex items-center text-2xl sm:text-6xl p-3 font-semibold dark:text-dark-primary'>
                    <FaShopify className=' text-rose-400'/>Globe
                </NavLink>
    {/*className={({isActive}) =>`text-3xlcursor-pointer hover:border-b ${isActive ? "text-amber-400":"text-amber-100"}`} */}

                {/* pages navigation button */}
                <div className='hidden md:flex items-center gap-6 text-2xl font-semibold'>
                    {/* home buttton */}
                    <NavLink to='/' className={({isActive})=> `hover:border-b-2  ${isActive ? "text-rose-400 border-b-2 text-3xl" : ""} dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary`}>Home</NavLink>
                    {/* products page link */}
                    <NavLink to='/Products' className={({isActive})=> `hover:border-b-2 ${isActive ? "text-rose-400 border-b-2 text-3xl" : ""} dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary`}>Products</NavLink>
                    {/* checkout page link */}
                    <NavLink to='/CheckOut' className={({isActive})=> `hover:border-b-2 ${isActive ? "text-rose-400 border-b-2 text-3xl" : ""} dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary`}>Checkout</NavLink>
                </div>

                {/* two buttons one for mode and the other is cart */}
                <div className='flex items-center text-2xl gap-5'>
                    {/* button to switch between light and dark mode */}
                    <button
                        onClick={() => setDark((prev) => !prev)}
                        className="p-2 rounded-lg dark:hover:bg-dark-border"
                        aria-label="Toggle theme"
                    >
                    {dark ? (
                        <MdOutlineLightMode className="w-5 h-5 text-yellow-500" />
                        ) : (
                        <MdOutlineDarkMode className="w-5 h-5 text-slate-600" />
                        )}
                    </button>
                    {/* the button to navigate to the cart */}
                    <NavLink to='cart'
                    className={({isActive})=> `hover:border-b-2 ${isActive ? "text-3xl text-rose-400" : ""} dark:hover:bg-dark-border`}>
                        <FaShoppingCart/>
                    </NavLink>

                    {/* MOBILE MENU BUTTON */}
                    <button
                    onClick={() => setOpen(true)}
                    className="md:hidden p-2 rounded-lg dark:hover:bg-dark-border"
                    aria-label="Open menu">
                        <FiMenu className="w-6 h-6 text-light-text dark:text-dark-text" />
                    </button>
                </div>
            </div>

            {/* MOBILE OVERLAY */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
                open
                    ? "visible opacity-100 bg-black/40 backdrop-blur-sm"
                    : "invisible opacity-0"
                }`}
                onClick={() => setOpen(false)}
            >
                {/* DRAWER */}
                <div
                className={`absolute right-0 top-0 h-full w-3/4 max-w-xs bg-light-surface dark:bg-dark-surface shadow-2xl transition-transform duration-300 ${
                    open ? "translate-x-0" : "translate-x-full"
                }`}
                onClick={(e) => e.stopPropagation()}
                >
                <div className="flex h-16 items-center justify-between px-4 border-b">
                    <span className="text-xl font-bold dark:text-dark-primary">
                    Menu
                    </span>
                    <button onClick={() => setOpen(false)}>
                    <ImCross className="w-6 h-6 dark:text-dark-text" />
                    </button>
                </div>

                <div className="flex flex-col gap-2 p-4 font-semibold">
                    {[
                    { to: "/", label: "Home" },
                    { to: "/products", label: "Products" },
                    { to: "/checkout", label: "Checkout" },
                    ].map(({ to, label }) => (
                    <NavLink
                        key={to}
                        to={to}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                        `p-3 rounded-xl ${
                            isActive
                            ? "dark:bg-dark-primary/10 dark:text-dark-primary"
                            : "dark:text-dark-text dark:hover:bg-dark-border/50"
                        }`
                        }
                    >
                        {label}
                    </NavLink>
                    ))}

                    <NavLink
                    to="/cart"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl text-light-text dark:text-dark-text hover:bg-light-border/50 dark:hover:bg-dark-border/50"
                    >
                    <span>My Cart</span>
                    {cartItems > 0 && (
                        <span className="h-6 w-6 flex items-center justify-center rounded-full bg-dark-primary text-xs font-bold text-black">
                        {cartItems}
                        </span>
                    )}
                    </NavLink>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
