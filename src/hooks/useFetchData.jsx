//as we need the data from the API in our both the components named ProductList and Productdetail so to avoid the code duplication
//of getting the data at each component level we create a common hook that when called directly gives the data, that is ready to 
//use.
//we are using the setState hooks from react to handle the state changes and the useEffect hook to get the data from the API
//and dependency array is empty here so that the API call doesn't happen everytime the data of dependancy array changes.

import React, { useEffect, useState } from 'react';
import axios from 'axios'

const useFetchData = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
      let ignore = false

      const fetchData = async () => {
        try{
          setLoading(true)
          const res = await axios.get('https://dummyjson.com/products')
          if(!ignore) setData(res.data)
        }
        catch(error){
          if(!ignore) {
            setError(error)
          }
        }
        finally{
          if(!ignore){
            setLoading(false)
          }
        }
      } 
        // fetch('https://dummyjson.com/products')
        // .then((res)=>res.json()) //it returns a promise(json()).
        // .then((data)=>setProducts(data.products)) //the promise is then waited to be resolved.
        // .catch(()=> setError('failed to fetch products')) //if we get an error while getting or fetching the API.

        fetchData();
        return () => { ignore = true; };
    },[])

  return [data, loading, error] //an object is returned
}

export default useFetchData;
