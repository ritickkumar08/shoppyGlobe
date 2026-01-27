import React, { useEffect, useState } from 'react'

//icon imports
import { IoTrashBinSharp } from "react-icons/io5";
import { FaCaretUp,FaCaretDown } from "react-icons/fa";
import { CiSquareAlert } from "react-icons/ci";

// redux imports
import { useDispatch } from 'react-redux'
import {increaseQuantity, decreaseQuantity, removeFromCart} from '../redux/slices/cartSlice'

function CartItem({item}) {
    const dispatch = useDispatch()
    const [lowWarning, setLowWarning] = useState(false)
    const [highWarning, setHighWarning] = useState(false)
    // console.log(item);
    
    // ---- Auto hide warning ----
    useEffect(() => {
        if (!lowWarning) return;
        const timer = setTimeout(() => setLowWarning(false), 2000);
        return () => clearTimeout(timer);
    }, [lowWarning]);

    useEffect(() => {
        if (!highWarning) return;
        const timer = setTimeout(() => setHighWarning(false), 2000);
        return () => clearTimeout(timer);
    }, [highWarning]);
    // ---- Defensive guards to try check for the item ----
    if (!item) return null;

    const {
        id,
        title,
        price,
        discountPercentage,
        quantity,
        category,
        images=[],
        stock
    } = item;
    // console.log(title);
    // console.log(images);
    // console.log(item);
    // console.log(category);
    // console.log(quantity);
    // console.log(item);
    
    
    const imageSrc = images[0] || "/placeholder.png";
    // console.log(imageSrc);
    

    const discountedPrice = (
        item.price * (1 - discountPercentage / 100)
    ).toFixed(2);
    // console.log(discountedPrice);
    // console.log(item.discountPercentage);
    
    // ---- Handlers (slice-aligned logic) ----
    const handleIncrease = () => {
        if (quantity >= stock) {
            setHighWarning(true)
            return
        }
        dispatch(increaseQuantity(id));
    };

    const handleDecrease = () => {
        if (quantity === 1) {
            setLowWarning(true)
            return
        }
        dispatch(decreaseQuantity(id)); 
        // slice auto-removes item when quantity === 0
    };

    const handleRemove = () => {
        dispatch(removeFromCart(id));
    };

    return (
        <div className='relative w-full flex flex-col md:flex-row gap-4 md:gap-8 p-3 rounded-md shadow-sm shadow-black bg-rose-200 transition-all hover:shadow-md'>

            {/* Image */}
            <div className="bg-rose-50 rounded-2xl w-full md:w-[10%] flex justify-center]">
                <img
                src={imageSrc}
                alt={title}
                loading="lazy"
                className="w-32 md:w-full object-contain rounded-md"
                />
            </div>
            
            {/* description/ details */}
            <div className='flex flex-col md:flex-row items-start md:items-center justify-between w-full md:w-[80%] gap-4'>
                {/* category and name of the item */}
                <div className=''>
                    <div className='border-2 border-rose-400 shadow-sm shadow-black w-fit px-3 md:px-4 rounded-3xl bg-red-400 text-white text-xs md:text-sm font-semibold'>
                        {category}
                    </div>
                    <div className='text-base sm:text-lg md:text-2xl font-serif mb-2 mt-2 md:mt-3'>
                        {title}
                    </div>
                </div>
                {/* quantity */}
                <div className='relative flex items-center gap-2 border rounded-md px-2 py-1'>
                    <button className='cursor-pointer' onClick={handleIncrease}>
                        <FaCaretUp size={20} className="md:hidden" />
                        <FaCaretUp size={24} className="hidden md:block" />
                    {/*  Dynamic Warning */}
                    {highWarning && (
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200 shadow-sm text-xs whitespace-nowrap">
                            <CiSquareAlert size={16}/>
                            Stock, Limit Reached!
                        </div>
                    )}</button>

                    <div className='text-lg md:text-2xl font-bold'>
                        {quantity}
                    </div>

                    <button className='cursor-pointer' onClick={handleDecrease}>
                        <FaCaretDown size={20} className="md:hidden" />
                        <FaCaretDown size={24} className="hidden md:block" />
                    {/*  Dynamic Warning */}
                    {lowWarning && (
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200 shadow-sm text-xs whitespace-nowrap">
                            <CiSquareAlert size={16}/>
                            Minimum reached,can delete the product.
                        </div>
                    )}</button>
                </div>
                {/* delete button */}
                 <div className='border rounded-lg bg-black shadow-sm hover:shadow-md'>
                        <button className='p-2' onClick={handleRemove}>
                            <IoTrashBinSharp size={20} className="md:hidden" color='white'/>
                            <IoTrashBinSharp size={35} className="hidden md:block" color='white'/>
                        </button>
                    </div>
                    {/* price, discountedPrice and dicount discountPercentage */}
                    <div className='flex items-baseline gap-1'>
                        <div className='text-lg md:text-2xl font-bold'>$ {discountedPrice}</div>
                        <div className='line-through text-xs md:text-sm text-gray-600'>{`(${price})`}</div>
                </div>     
            </div>
        </div>
    )
}

export default CartItem
