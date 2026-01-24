import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
//action method from cart slice
import {addToCart} from '../redux/slices/cartSlice'
//custom hook that gives data
import useFetchData from '../hooks/useFetchData'
//icons
import { FaStar , FaRegStar } from "react-icons/fa";
import { GiWeight } from "react-icons/gi";
import { FaHashtag } from "react-icons/fa";
import { RxDimensions } from "react-icons/rx";
import { FaLongArrowAltRight } from "react-icons/fa";


import Loader from './Loader';
import NotFound from './NotFound';

/* helper component to render stars and avoid re-creation same as in the product item page*/
function Stars({ rating }) {
  const safeRating = Number(rating) || 0;
  const filledStars = Math.floor(safeRating);

  return (
    <div className="flex items-center gap-0.5 text-yellow-500">
      {[...Array(5)].map((_, index) => (
        <FaStar 
          key={index}
          size={24}
          fill={index < filledStars ? "currentColor" : <FaRegStar />}
          className={index < filledStars ? "" : "text-light-muted/30"}
        />
      ))}
      <span className="ml-2 text-xl text-black dark:text-dark-muted">
        ({safeRating})
      </span>
    </div>
  );
}



function ProductDetail() {

    const {id} = useParams();
    const dispatch = useDispatch()

    const [data, loading, error] = useFetchData(id)
    console.log(data);
    
    const product = data?.products?.find(p => p.id === Number(id));
    // console.log(product);
    
    //becaues we are using lazy loading it might take some time to load the products data and so in the meanwhile it will show the 
    // loading page
    if(loading){
        return (
            <div>
                <Loader />
            </div>
        );
    } 
    //if error returns from the data fetching process then notfound page must be rendered
    if(error) return <NotFound/>

    if (!data) return null;

    const {
        title,
        description,
        price,
        discountPercentage = 0,
        rating = 0,
        images = [],
        thumbnail,
        brand,
        sku,
        weight,
        dimensions = {},
        reviews = [],
    } = product;
    // console.log(title);
    

    const mainImage = images[0] || thumbnail || "/placeholder.png";
    // console.log(mainImage);
    
    const discountedPrice = (
        price * (1 - discountPercentage / 100)
    ).toFixed(2);

    const addItemToCart = () => {
        dispatch(
        addToCart({
            id: data.id,
            title,
            price,
            image: mainImage,
            quantity: 1,
        })
        );
    };


    return (
        <div className='min-h-screen bg-gradient-to-r from-rose-50 to-rose-100  dark:bg-dark-bg top-0 border'>
            {/* outer div */}
            <div className='mx-auto px-4 py-10 mt-32 h-[90%] max-w-7xl bg-rose-400 rounded-lg shadow-md shadow-black'>
                {/* inner di */}
                <div className='flex-col flex md:flex-row m-2 bg-rose-100 shadow-md shadow-black rounded-lg h-full'>
                    {/* image section  */}
                    <section className='aspect-square rounded-l-xl'>
                        <img src={mainImage} alt={title} className='w-full h-full object-contain'/>
                    </section>
                    {/* details section */}
                    <section className='p-2'>
                        {/* a grid containing all the more details -> name, description, addtocart, [price, details(weight, width), size] */}
                        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-3 gap-0 sm:grid-rows-[2fr_2fr_1fr]'>
                            <div className='text-4xl font-serif p-2 font-bold'>{title}</div>
                            <div className='sm:p-2 p-0'>
                                <div className='sm:mb-4 mb-0'>
                                    <div className='text-4xl font-bold'>${discountedPrice}</div>
                                    <span className='text-gray-700 line-through mr-2'>{price} </span><span className='rounded-2xl px-3 py-0.5 no-underline bg-rose-400 text-rose-200 shadow-black shadow-sm'>{discountPercentage}% OFF</span>
                                </div>
                                <div className=''><Stars rating={rating}/></div>
                            </div>
                            <div className='overflow-auto text-gray-700 mt-1.5'>{description}</div>
                            <div className='text-lg mt-1.5'>
                                <div className='p-0'>{brand}</div>
                                <div className='w-20 border mb-2 border-rose-400'></div>
                                <p className='flex gap-2 items-center'><RxDimensions size={30}/><FaLongArrowAltRight /> {dimensions.width}cm × {dimensions.height}cm × {dimensions.depth} cm </p>
                            </div>
                            {/* button to add to cart */}
                            <div className='mt-2'>
                                <button onClick={addItemToCart(product)}
                                    className='w-full text-white font-semibold font-serif rounded-sm py-2 bg-rose-400 h-full'
                                >Add To Cart</button>
                            </div>
                            <div className='hidden md:flex'>
                                <p className='flex w-1/2 h-full text-2xl mr-2 text-white bg-rose-400 items-center justify-center rounded-sm'><GiWeight size={32}/> {weight} gm</p>
                                <p className='flex w-1/2 h-full text-white bg-rose-400 px-4 items-center justify-center rounded-sm'><FaHashtag size={32}/>{sku}</p>
                            </div>
                        </div>
                        <Link to="/checkout">
                            <button className='w-full p-3 bg-black text-white rounded-md mt-12'>Buy Now</button>
                        </Link>   
                    </section>
                </div>
            </div>
            <div className='w-7xl bg-rose-400 border mt-10 mx-auto'></div>

            <div className="dark:border-dark-border pt-10 max-w-7xl mx-auto mb-10">
                <h2 className="text-2xl font-bold mb-8 text-light-text dark:text-dark-text">
                    Customer Reviews
                </h2>

                {reviews.length === 0 ? (
                    <p className="text-light-muted">No reviews yet.</p>
                    ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviews.map((rev) => {
                        const initial =
                        rev.reviewerName?.trim()?.charAt(0) || "?";
                        const date = rev.date
                        ? new Date(rev.date).toLocaleDateString()
                        : "—";

                        return (
                        <div
                            key={`${rev.reviewerName}-${rev.date}`}
                            className="p-6 rounded-3xl bg-rose-100 dark:bg-dark-surface border border-rose-200 dark:border-dark-border">

                            <p className="text-lg font-semibold mb-5 dark:text-dark-text">
                            “{rev.comment}”
                            </p>

                            <div className="flex items-center gap-3 pt-4 border-t dark:border-dark-border">
                            <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold">
                                {initial}
                            </div>
                            <div>
                                <p className="text-sm font-semibold dark:text-dark-text">
                                {rev.reviewerName}
                                </p>
                                <p className="text-xs text-light-muted">
                                {date}
                                </p>
                            </div>
                            </div>
                        </div>
                        );
                    })}
                    </div>
                )}
            </div>

        </div>
    )
}

export default ProductDetail
