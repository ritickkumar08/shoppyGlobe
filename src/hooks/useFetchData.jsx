//as we need the data from the API in our both the components named ProductList and Productdetail so to avoid the code duplication
//of getting the data at each component level we create a common hook that when called directly gives the data, that is ready to 
//use.

import React, { useEffect, useState } from 'react';

const useFetchData = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then((res)=>res.json())
        .then((data)=>setProducts(data.products))
        .catch(()=> setError('failed to fetch products'))
    },[])

  return {products, error}
}

export default useFetchData;
