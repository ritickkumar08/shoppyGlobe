import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux' //<MdOutlineProductionQuantityLimits />

//icons import
import { CiShoppingBasket } from "react-icons/ci"; //
import { FaSadTear } from "react-icons/fa";
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { FaArrowLeft } from "react-icons/fa";

function Cart() {

    // Single source of truth: Redux
    const cartItems = useSelector((state) => state.cart.items);
    console.log(cartItems);

    // const [cartItems, setCartItems] = useState([]);
    //     const selector = useSelector((state) => state.cart.tems);

    //     // Sync local state with Redux store
    //     useEffect(() => {
    //         setCartItems(selector);
    //     }, [selector]);
    //     console.log(cartItems);

    // Empty cart state (early return)
    if(!cartItems.length){
        return(
            <div className='min-h-screen flex items-center justify-center bg-gradient-to-r  from-rose-50 to-rose-100 dark:bg-dark-bg px-6'>
                <div className='max-w-xl w-full text-center space-y-8 p-12 dark:bg-dark-surface rounded-3xl shadow-black shadow-lg '>
                    {/* icon of a cart */}
                    <div className='w-fit mx-auto'>
                        <CiShoppingBasket  size={152} className='text-rose-400'/>
                    </div>
                    {/* div conating a text and a button to browse products */}
                    <div>
                        <p className='flex items-center gap-2 text-xl font-serif font-medium justify-center'>Your basket Feels <FaSadTear size={30}  className=' text-yellow-400'/></p>
                        <div className='mt-6'>
                            <Link to='/products' className='text-xl font-serif font-medium justify-center bg-black px-8 py-4 text-white rounded-2xl shadow-md shadow-black hover:bg-gray-700 hover:shadow-lg'>Add something.</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='min-h-screen w-full bg-gradient-to-r  from-rose-50 to-rose-100 dark:bg-dark-bg py-12 transition-colors duration-300'>
            <div className='max-w-6xl mx-auto px-4 flex flex-col items-center gap-8 mt-24'>
                {/* Header */}
                <div className='w-full flex items-center justify-between mb-4'>
                    <h1 className='text-4xl font-medium font-serif dark:text-dark-text tracking-tighter uppercase'>
                        Your{" "}
                        <span className='dark:text-dark-primary text-rose-400'>
                        Basket
                        </span>
                    </h1>

                    <span className='text-lg font-medium text-white bg-black dark:bg-dark-surface px-4 py-2 rounded-2xl'>
                        {cartItems.length} {cartItems.length === 1 ? "Item" : "Items"}
                    </span>
                </div>

                {/* cart item mapping */}

                <div className='w-full flex flex-col gap-8 items-center'>
                    {cartItems.map((item) => (
                       <CartItem
                            key={item.id}
                            item={item}
                            discountedPrice={(
                                item.price *
                                (1 - item.discountPercentage / 100)
                            ).toFixed(2)}
                            />
                        ))}

                        {/* Continue Shopping */}
                        <Link
                            to="/products"
                            className="flex items-center gap-2 border-2 font-black text-rose-400 uppercase tracking-widest mt-4 px-8 py-4 rounded-full border-rose-400 shadow-sm shadow-black hover:shadow-black hover:shadow-md"
                        >
                            <FaArrowLeft  size={20} />
                            Continue Shopping
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default Cart
