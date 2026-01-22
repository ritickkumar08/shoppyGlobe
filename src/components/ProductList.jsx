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
    console.log(data);
    // console.log(loading);
    // console.log(error);
    
     // Search query from Redux store subscribing to the redux store components
    const input = useSelector((state) => state.search.input)
    console.log(input);
    

    //products stored after filtering and only storing the needed products after being searched
    const filteredProducts = useMemo(()=>{
        if(!data.products) return[]

        return data?.products?.filter((product) => 
            product.title.toLowerCase().includes(input.toLowerCase())
        )
    },[data,input])
    
    console.log(filteredProducts);
    

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
        <div className='border w-full flex flex-col min-h-screen bg-gradient-to-r items-center from-rose-200 to-rose-400 dark:bg-dark-bg transition-colors duration-300'>
            
            <section className='mt-24'>
                {/* search Bar */}
                <div className='w-4xl max-w-6xl mx-auto mt-5 mb-10 px-4'>
                    <div className='relative group'>
                        {/* search icon */}
                        <span className='absolute left-6 top-1/2 -translate-y-1/2 text-light-muted group-focus-within:text-light-primary transition-colors border-r-2 pr-3 text-rose-300'>
                            <FaSearch size={34} />
                        </span>
        
                        <input type="text" value={input} onChange={(e)=>dispatch(setSearchInput(e.target.value))} placeholder='search for products in your mind...'
                        className='w-full h-16 md:h-20 pl-20 rounded-lg 
                            bg-gradient-to-r from-white via-transparent to-transparent
                            dark:bg-dark-surface
                            border-2 border-white dark:border-dark-border
                            text-xl md:text-2xl font-black
                            text-light-text dark:text-dark-text
                            placeholder:text-light-muted/50 placeholder:font-bold
                            outline-none shadow-sm transition-all
                            focus:border-light-primary focus:shadow-2xl focus:shadow-light-primary/10'
                        />
                        {input && (
                            <button onClick={() => dispatch(setSearchInput(""))}
                            className="absolute right-6 top-1/2 -translate-y-1/2 text-light-muted hover:text-rose-500 transition-colors">
                            <LuSearchX size={34}/>
                            </button>
                        )}
                    </div>
                    {/* Search Hint */}
                    <div className="mt-2 ml-1 flex gap-4 overflow-x-auto cursor-pointer">
                        <p className="text-xs font-black uppercase tracking-widest text-light-muted/60">Popular:</p>
                        {['Electronics', 'Beauty', 'Groceries'].map(tag => (
                        <button key={tag}
                            onClick={() => dispatch(setSearchInput(tag))}
                            className="text-xs font-bold  hover:underline whitespace-nowrap cursor-pointer">
                            {tag}
                        </button>
                        ))}
                    </div>
                </div>

                {/* Header */}
                <div className="w-7xl px-6 pt-10 pb-4 flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                    <h1 className="text-2xl md:text-3xl font-black flex gap-2">
                        Currently In <IoStorefront /> <span className="text-rose-400">Items...</span>
                    </h1>
                    <div className="h-1 w-16 bg-rose-400 rounded-full"></div>
                    </div>

                    {/* ✅ Filtered count */}
                    <span className="text-sm font-semibold px-4 py-1 rounded-full text-nowrap border-2 border-white bg-gradient-to-r from-white to-transparent">
                    {filteredProducts?.length || 0} Items Found
                    </span>
                </div>

                {/* Products display*/}
                <div className="w-full max-w-7xl flex flex-wrap gap-8 p-6">
                    {filteredProducts?.length > 0 ? (
                        filteredProducts.map((product) =>(
                            <div key={product.id} className="flex-[1_1_280px] max-w-[320px]">
                                <ProductItem/>
                            </div>
                        ))) : (
                        <div className='w-full py-20 text-center'>
                            <p className='text-lg italic font-black'> **Products not Found</p>
                        </div>
                    )}
                </div>

            </section>
        </div>
    )
}

export default ProductList
