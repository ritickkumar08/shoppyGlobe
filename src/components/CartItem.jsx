import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {increaseQuantity, decreaseQuantity, removeFromCart, clearCart} from '../redux/slices/cartSlice'

function CartItem({item}) {
    const dispatch = useDispatch()
    const [warning, setWarning] = useState(false)
    // console.log(item);
    

    // ---- Auto hide warning ----
    useEffect(() => {
        if (!warning) return;
        const timer = setTimeout(() => setWarning(false), 2000);
        return () => clearTimeout(timer);
    }, [warning]);

    // ---- Defensive guards to try check for the item ----
    // if (!item) return null;

    // const {
    //     title,
    //     price,
    //     discountPercentage,
    //     noOfItems,
    //     category,
    //     image,
    // } = item;
    // // console.log(title);
    // // console.log(image);
    // console.log(item);
    // // console.log(category);
    
    

    const quantity = item.noOfItems ?? 1;
    const imageSrc = item.image || "/placeholder.png";
    // console.log(imageSrc);
    

    const discountedPrice = (
        item.price * (1 - item.discountPercentage / 100)
    ).toFixed(2);
    // console.log(discountedPrice);
    console.log(item.discountPercentage);
    
    


    // ---- Handlers ----
    // const handleDecrease = () => {
    //     if (quantity <= 1) {
    //     setWarning(true);
    //     return;
    //     }
    //     dispatch(decreaseQuantity(item));
    // };
    // const handleIncrese = () => {
    //     if (quantity <= 1) {
    //     setWarning(true);
    //     return;
    //     }
    //     dispatch(decreaseQuantity(item));
    // };


    // const handleIncrease = () => {
    //     dispatch(addToCart(item));
    // };

    // const handleRemove = () => {
    //     dispatch(removeCart(item));
    // };


    return (
        <div className='relative w-full flex flex-row gap-8 p-2 rounded-md shadow-sm shadow-black bg-rose-200 dark:bg-dark-surface dark:border-dark-border transition-all hover:shadow-lg'>

            {/* Image */}
            <div className="bg-white rounded-2xl">
                <img
                src={imageSrc}
                alt={item.title}
                loading="lazy"
                className="h-22 w-22 md:h-30 md:w-30 object-contain border-2 rounded-md  dark:border-dark-border"
                />
            </div>
            
            {/* description/ details */}
            <div>
                <div className='text-sm md:text-2xl font-serif mb-2'>{item.title}</div>
                <div>${discountedPrice}${item.price}</div>
                <div>
                    {quantity}
                    <button>delete</button>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default CartItem
