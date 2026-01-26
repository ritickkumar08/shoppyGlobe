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
const CartPage = lazy(()=>import('../pages/CartPage'))
// import CheckOut from '../pages/CheckOut'
const CheckOut = lazy(()=> import('../pages/CheckOut'))


// HOC to wrap lazy components with Suspense.
// This avoids repeating Suspense logic for every route.
const withSuspense = (Comp) =>(
    <Suspense fallback={<div><Loader/></div>}>
        <Comp/>
    </Suspense>
)

// All child routes render inside App's <Outlet />.
const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        // Route-level error boundary.
        // This catches rendering + loader errors for this subtree.
        errorElement : <NotFound/>,
        children:[
            {
                // Home page: "/"
                index:true,
                element: withSuspense(Home),
            },
            {
                path: 'products',
                element: <ProductLayout/>,
                children:[
                    {
                        // "/products"
                        index: true,
                        element:withSuspense(Products),
                    },
                    {
                        // "/products/:id"
                        path: ':id',
                        element:withSuspense(ProductDetailsPage),
                    },
                ]
            },
            {
                // "/cart"
                path: 'cart',
                element:withSuspense(CartPage),
            },
            {
                // "/checkout"
                path: 'checkout',
                element:withSuspense(CheckOut),
            }
        ]
    }
])


export default router