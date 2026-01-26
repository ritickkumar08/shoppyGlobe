import React, { useMemo } from 'react'
//custom hook that gives data
import useFetchData from '../hooks/useFetchData'
import { LuSearchX } from "react-icons/lu"; //<LuSearchX />
import { FaSearch } from "react-icons/fa";
import { IoStorefront } from "react-icons/io5";

//react redux imports
import {useDispatch, useSelector} from 'react-redux'
import { setSearchInput } from "../redux/slices/searchSlice"

//different components to display while the data or page loads or shows error
import Loader from './Loader'
import NotFound from './NotFound'
import ProductItem from './ProductItem'


function ProductList() {
    const dispatch = useDispatch()

    //fetchong the data from the custom hook
    const [data, loading, error]  = useFetchData()
    // console.log(data);
    // console.log(loading);
    // console.log(error);
    
     // Search query from Redux store subscribing to the redux store components
    const input = useSelector((state) => state.search.query)
    // console.log(input);
    

    //products stored after filtering and only storing the needed products after being searched
    const filteredProducts = useMemo(()=>{
        if(!data.products) return[]

        return data?.products?.filter((product) => 
            product.title.toLowerCase().includes(input.toLowerCase())
        )
    },[data,input])
    
    // console.log(filteredProducts);
    

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
    

    
    return (
        <div className='border w-full flex flex-col min-h-screen bg-gradient-to-r items-center from-rose-50 to-rose-100 transition-colors duration-300 dark:bg-'>
            
            <section className='mt-20 sm:mt-24 '>
                {/* search Bar */}
                <div className='w-full max-w-6xl mx-auto mt-4 sm:mt-5 mb-8 sm:mb-10 px-3 sm:px-4'>
                    <div className='relative group'>
                        {/* search icon */}
                        <span className='absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 text-rose-300 border-r-2 pr-2 sm:pr-3'>
                            <FaSearch size={24} className="sm:hidden" />
                            <FaSearch size={34} className="hidden sm:block" />
                        </span>
        
                        <input type="text" value={input} onChange={(e)=>dispatch(setSearchInput(e.target.value))} placeholder='Search for products in your mind...'
                        className='w-full h-14 sm:h-16 md:h-20
                                pl-14 sm:pl-20
                                rounded-lg
                                bg-gradient-to-r from-white via-transparent to-transparent
                                border-2 border-white
                                text-base sm:text-xl md:text-2xl font-semibold
                                placeholder:text-gray-400 placeholder:font-extralight
                                outline-none shadow-sm transition-all
                                focus:border-rose-400 focus:shadow-2xl focus:shadow-rose-400/10'
                        />
                        {input && (
                            <button onClick={() => dispatch(setSearchInput(""))}
                            className='absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-rose-400 hover:text-rose-500 transition-colors'>
                                <LuSearchX size={24} className="sm:hidden" />
                                <LuSearchX size={34} className="hidden sm:block" />
                            </button>
                        )}
                    </div>
                    {/* Search Hint */}
                    <div className='mt-2 ml-1 flex gap-3 sm:gap-4 overflow-x-auto cursor-pointer'>
                        <p className='text-xs font-black uppercase tracking-widest text-gray-500 whitespace-nowrap'>Popular:</p>
                        {['Electronics', 'Beauty', 'Groceries'].map(tag => (
                        <button key={tag}
                            onClick={() => dispatch(setSearchInput(tag))}
                            className='text-xs font-bold  hover:underline whitespace-nowrap cursor-pointer'>
                            {tag}
                        </button>
                        ))}
                    </div>
                </div>

                {/* Header */}
                <div className='w-full max-w-7xl px-4 sm:px-6 pt-6 sm:pt-10 pb-4 flex flex-col sm:flex-row gap-4 sm:gap-0 items-start sm:items-center justify-between'>
                    <div className='flex flex-col gap-1'>
                    <h1 className='text-xl sm:text-2xl md:text-3xl font-black flex gap-2 font-serif items-center'>
                        Currently In <IoStorefront /> <span className='text-rose-400'>Items...</span>
                    </h1>
                    <div className='h-1 w-12 sm:w-16 bg-rose-400 rounded-full'></div>
                    </div>

                    {/* ✅ Filtered count */}
                    <span className='text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 rounded-full bg-black text-white'>
                    {filteredProducts?.length || 0} Items Found
                    </span>
                </div>

                {/* Products display*/}
                <div className='w-full max-w-7xl flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-8 p-4 sm:p-6'>
                    {filteredProducts?.length > 0 ? (
                        filteredProducts.map((product) =>(
                            <div key={product.id} className='flex-[1_1_240px] sm:flex-[1_1_260px] lg:flex-[1_1_280px] max-w-[320px]'>
                                <ProductItem key={product.id}
                                            id={product.id}
                                            title={product.title}
                                            description={product.description}
                                            price={product.price}
                                            images={product.images}
                                            category={product.category}
                                            rating={product.rating}
                                            thumbnail={product.thumbnail}/>
                            </div>
                        ))) : (
                        <div className='w-full py-16 sm:py-20 text-center'>
                            <p className='text-base sm:text-lg italic font-black'> **Products not Found</p>
                        </div>
                    )}
                </div>

            </section>
        </div>
    )
}

export default ProductList
