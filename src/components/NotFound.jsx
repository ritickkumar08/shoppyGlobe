import React from 'react'
import { isRouteErrorResponse, useRouteError,Link  } from 'react-router-dom'

function NotFound() {

    const error = useRouteError() //this hook give us the object error with the informations
    console.log(error);
    // const location = useLocation()
    // console.log(location);
    
    const status = isRouteErrorResponse(error) ? error.status : '500';
    // console.log(status);
    const title = isRouteErrorResponse(error) ? error.statusText : 'system failure';
    // console.log(title);
    const message = isRouteErrorResponse(error) ? error.data?.message || "Page not found"
    : "The page you are looking for does not exist."
    

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-r from-rose-200 to-rose-400 ">
            <div className="max-w-2xl w-full bg-rose-100 rounded-xl shadow-lg p-8 text-center shadow-black">
                <h1 className="text-9xl font-extrabold text-red-500 mb-4">{status}</h1>

                <h2 className="text-4xl uppercase font-semibold text-gray-800 mb-2">{title}</h2>

                <p className="text-gray-600 mb-6">{message}</p>

                <Link to="/" className="inline-block bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition text-lg">
                 BACK TO HOME
                </Link>
            </div>
        </div>
    )
}

export default NotFound
