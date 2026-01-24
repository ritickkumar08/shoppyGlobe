import React from 'react'
import {Link} from 'react-router-dom'
import { FaStar , FaRegStar } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdOutlineAddShoppingCart } from "react-icons/md";


import { useDispatch } from "react-redux";
import {addToCart} from '../redux/slices/cartSlice'


/* helper component to render stars and avoid re-creation */
function Stars({ rating }) {
  const safeRating = Number(rating) || 0;
  const filledStars = Math.floor(safeRating);

  return (
    <div className="flex items-center gap-0.5 text-yellow-500">
      {[...Array(5)].map((_, index) => (
        <FaStar 
          key={index}
          size={14}
          fill={index < filledStars ? "currentColor" : <FaRegStar />}
          className={index < filledStars ? "" : "text-light-muted/30"}
        />
      ))}
      <span className="ml-2 text-xs text-black dark:text-dark-muted">
        ({safeRating})
      </span>
    </div>
  );
}

function ProductItem({id,
  title,
  description,
  price,
  images = [],
  category,
  rating = 0,
  thumbnail
}) {

    const dispatch = useDispatch();

    const image = images[0] || "/placeholder.png";
    
    const addItemToCart = () => {
        dispatch(
        addToCart({
            id,
            title,
            price,
            image,
            quantity: 1,
        })
        );
    };

    

    return (
        <div className='group relative flex flex-col xs:mx-auto w-full max-w-sm bg-gradient-to-r from-white via-transparent to-white dark:bg-dark-surface border-2 border-white dark:border-dark-border rounded-2xl overflow-hidden hover:border-light-primary/50 dark:hover:border-dark-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1'>
            {/* image wrapper for the product item */}
            <div className='relative aspect-square overflow-hidden'>
                <img
                className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105 border-b-2 border-rose-400 shadow-md shadow-rose-500"
                src={thumbnail} alt={title} 
                loading="lazy"/>
                <div className="absolute top-3 left-3 px-2 py-1 text-[10px] font-bold uppercase bg-rose-400 dark:bg-dark-primary text-white dark:text-dark-bg rounded-md shadow-sm">
                {category}
                </div>
            </div>

            {/* Content */}
            <div className='p-5 flex flex-col flex-grow bg-rose-100'>
                <h2 className='font-serif text-light-text dark:text-dark-text text-lg font-bold line-clamp-1 mb-1 group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors'>
                    {title}
                </h2>

                {/* callint the helper function to determine the number of filled stara and render them */}
                <div className='mb-3'>
                    <Stars rating={rating} />
                </div>
                
                {/* description */}
                <p className='text-gray-800 dark:text-dark-muted text-sm line-clamp-2 mb-4 h-10'>
                    {description}
                </p>

                {/* Price */}
                <div className='mt-auto flex items-end justify-between'>
                <div className='flex flex-col'>
                    <span className='text-xs text-light-muted dark:text-dark-muted font-medium'>
                    Price
                    </span>
                    <span className='text-xl font-black text-light-text dark:text-dark-text'>
                    ₹{Number(price).toLocaleString()}
                    </span>
                </div>
                </div>

                {/* Actions */}
                <div className='grid grid-cols-2 gap-2 mt-4'>
                <Link
                    to={`/products/${id}`}
                    className='flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold border-white border-2 bg-rose-50 dark:border-dark-border text-rose-400 dark:text-dark-text rounded-xl hover:bg-light-bg dark:hover:bg-dark-bg transition-all'>
                    <BiMessageSquareDetail size={16}/>
                    Details
                </Link>

                <button
                    onClick={addItemToCart}
                    className='flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold bg-rose-400 dark:bg-dark-primary text-white dark:text-dark-bg rounded-xl shadow-lg shadow-light-primary/20 dark:shadow-dark-primary/20 hover:opacity-90 active:scale-95 transition-all'>
                    <MdOutlineAddShoppingCart size={16} />
                    Add
                </button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
