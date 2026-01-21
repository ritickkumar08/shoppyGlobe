import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";

import App from "../App";
import NotFound from '../components/NotFound'
import Home from '../pages/Home'
import Products from '../pages/Products'
import ProductDetailsPage from "../pages/ProductDetailsPage";
import Cart from '../pages/Cart'
import CheckOut from '../pages/CheckOut'
import ProductLayout from "../Layout/ProductLayout";


const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        errorElement : <NotFound/>,
        children:[
            {
                index:true,
                element:(
                    <Suspense fallback='loading...'>
                        <Home/>
                    </Suspense>
                )
            },
            {
                path: 'products',
                element: <ProductLayout/>,
                children:[
                    {
                        index: true,
                        element:(
                            <Suspense>
                                <Products/>
                            </Suspense>
                        )
                    },
                    {
                        path: ':id',
                        element:(
                            <Suspense>
                                <ProductDetailsPage/>
                            </Suspense>
                        )
                    },
                    {
                        path: '*',
                        element: <NotFound/>
                    }
                ]
            },
            {
                path: 'cart',
                element:(
                    <Suspense>
                        <Cart/>
                    </Suspense>
                )
            },
            {
                path: 'checkout',
                element:(
                    <Suspense>
                        <CheckOut/>
                    </Suspense>
                )
            }
        ]
    }
])


export default router