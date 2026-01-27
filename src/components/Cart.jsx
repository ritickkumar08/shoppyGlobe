import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux' 
import { clearCart } from '../redux/slices/cartSlice';

//icons import
import { CiShoppingBasket } from "react-icons/ci"; //
import { FaSadTear } from "react-icons/fa";
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { FaArrowLeft } from "react-icons/fa";
import { IoTrashBinSharp } from "react-icons/io5";
import { IoBagCheckOutline } from "react-icons/io5";

function Cart() {

    // Single source of truth: Redux
    const { items: cartItems, totalQuantity } = useSelector(
            (state) => state.cart);

    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart())
    }

    // Empty cart state (early return)
    if(cartItems.length === 0){
        return(
            <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-rose-50 to-rose-100 px-4 sm:px-6'>
                <div className='max-w-xl w-full text-center space-y-6 sm:space-y-8 p-6 sm:p-10 rounded-3xl shadow-black shadow-lg'>
                    {/* icon of a cart */}
                    <div className='w-fit mx-auto'>
                        <CiShoppingBasket size={96} className='sm:hidden text-rose-400'/>
                        <CiShoppingBasket size={152} className='hidden sm:block text-rose-400'/>
                    </div>
                    {/* div conating a text and a button to browse products */}
                    <div>
                        <p className='flex items-center gap-2 text-base sm:text-xl font-serif font-medium justify-center'>Your basket Feels 
                            <FaSadTear size={22} className='sm:hidden text-yellow-400'/>
                            <FaSadTear size={30} className='hidden sm:block text-yellow-400'/>
                        </p>
                        <div className='mt-4 sm:mt-6'>
                            <Link to='/products' className='text-base sm:text-xl font-serif font-medium bg-black px-6 sm:px-8 py-3 sm:py-4 text-white rounded-2xl shadow-md shadow-black hover:bg-gray-700 hover:shadow-lg'>Add something.</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='min-h-screen w-full bg-gradient-to-r from-rose-50 to-rose-100 py-8 sm:py-12 transition-colors duration-300'>
            <div className='max-w-6xl mx-auto px-4 flex flex-col items-center gap-6 sm:gap-8 mt-20 sm:mt-24'>
                {/* Header */}
                <div className='sticky top-24 z-30 w-full backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl font-medium font-serif tracking-tighter uppercase'>
                        Your{" "}
                        <span className='text-rose-400'>
                        Basket
                        </span>
                    </h1>

                    <div className='flex gap-2 sm:gap-3 items-start sm:items-center'>
                        <span className='text-sm sm:text-base border-3 sm:border-0 border-black md:text-lg font-medium text-white bg-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl whitespace-nowrap'>
                            {totalQuantity} {totalQuantity === 1 ? "Item" : "Items"}
                        </span>
                        <button 
                        onClick={handleClearCart}
                        className='flex items-center gap-1 border-2 border-rose-500 rounded-xl bg-rose-400 p-1 shadow-sm shadow-black hover:shadow-md cursor-pointer'>
                            <p className='font-black text-xs sm:text-sm md:text-base text-white flex items-center border p-1 rounded-md'>ClearCart</p>
                            <span className='text-white border p-1 rounded-md'>
                                <IoTrashBinSharp size={16} className="sm:hidden"/>
                                <IoTrashBinSharp size={24} className="hidden sm:block"/>
                            </span>
                        </button>
                    </div>
                </div>

                {/* cart item mapping */}

                <div className='w-full flex flex-col gap-6 sm:gap-8 items-center'>
                    {cartItems.map((item) => (
                       <CartItem
                            key={item.id}
                            item={item}
                            />
                        ))}

                        <div className='flex flex-col sm:flex-row max-w-3xl w-full justify-around'>
                            {/* Continue Shopping */}
                            <Link
                                to='/products'
                                className='flex items-center gap-2 border-2 font-black text-rose-400 uppercase tracking-widest mt-4 px-6 sm:px-8 py-3 sm:py-4 rounded-full border-rose-400 shadow-sm shadow-black hover:shadow-md'>
                                <FaArrowLeft  size={20} />
                                Continue Shopping
                            </Link>
                            {/* Continue Shopping */}
                        <Link
                            to='/checkout'
                            className='flex items-center gap-2 border-2 bg-black font-black text-white uppercase tracking-widest mt-4 px-6 sm:px-8 py-3 sm:py-4 rounded-md border-black shadow-sm shadow-black hover:shadow-md'>
                            <IoBagCheckOutline size={20}/> CheckOut
                        </Link>

                        </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
