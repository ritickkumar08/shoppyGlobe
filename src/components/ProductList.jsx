import React from 'react'
import useFetchData from '../hooks/useFetchData'
import Loader from './Loader'
import NotFound from './NotFound'


function ProductList() {

    //fetchong the data from the custom hook
    const [products, loading, error]  = useFetchData()
    // console.log(products);
    // console.log(loading);
    // console.log(error);
    
    if(loading) return <Loader/>
    if(error) return <NotFound/>
    

    return (
        <div className='border bg-gradient-to-r min-h-screen from-rose-200 via-rose-400 dark:bg-dark-bg transition-colors duration-300'>
            <section className='mt-24'>
                <h1>productlist</h1>
            </section>
        </div>
    )
}

export default ProductList
