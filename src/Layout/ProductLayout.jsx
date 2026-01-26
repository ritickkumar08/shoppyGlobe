import React from 'react'
import { Outlet } from 'react-router-dom'
// ProductLayout is a route-level layout wrapper for all /products routes.

function ProductLayout() {
    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default ProductLayout
