import { createBrowserRouter} from "react-router-dom";
import { lazy, Suspense } from "react";

import App from "../App";
import NotFound from '../components/NotFound'
import ProductLayout from "../Layout/ProductLayout";
import Loader from "../components/Loader";

// lazy-loaded pages
// import Home from '../pages/Home'
const Home = lazy(() => import('../pages/Home'))
// import Products from '../pages/Products'
const Products = lazy(() => import('../pages/Products'))
// import ProductDetailsPage from "../pages/ProductDetailsPage";
const ProductDetailsPage = lazy(()=> import("../pages/ProductDetailsPage"))
// import Cart from '../pages/Cart'
const Cart = lazy(()=>import('../pages/Cart'))
// import CheckOut from '../pages/CheckOut'
const CheckOut = lazy(()=> import('../pages/CheckOut'))


const withSuspense = (Comp) =>(
    <Suspense fallback={<div><Loader/></div>}>
        <Comp/>
    </Suspense>
)


const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        errorElement : <NotFound/>,
        children:[
            {
                index:true,
                element: withSuspense(Home),
            },
            {
                path: 'products',
                element: <ProductLayout/>,
                children:[
                    {
                        index: true,
                        element:withSuspense(Products),
                    },
                    {
                        path: ':id',
                        element:withSuspense(ProductDetailsPage),
                    },
                ]
            },
            {
                path: 'cart',
                element:withSuspense(Cart),
            },
            {
                path: 'checkout',
                element:withSuspense(CheckOut),
            }
        ]
    }
])


export default router