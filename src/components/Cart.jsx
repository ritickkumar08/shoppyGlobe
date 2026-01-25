import React from 'react'
import {useSelector} from 'react-redux' //<MdOutlineProductionQuantityLimits />

//icons import
import { CiShoppingBasket } from "react-icons/ci"; //
import { FaSadTear } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Cart() {

    // Single source of truth: Redux
    const cartItems = useSelector((state) => state.cart.items);
    // console.log(cartItems);

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
        <div>
            cart
        </div>
    )
}

export default Cart
