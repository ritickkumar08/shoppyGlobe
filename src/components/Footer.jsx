// footer.jsx
// a component to display footer for the webpage.
// will be shown on every navigating page.
import { FaShopify } from "react-icons/fa"

import React from 'react'
import { GiBlackBook } from "react-icons/gi";
import { FaHeartbeat } from "react-icons/fa";


function Footer() {
    return (
        <footer className='w-full bg-black py-4 px-4'>
            <div className='max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left'>
                {/* Logo */}
                <h1 className="flex items-center text-2xl sm:text-4xl font-bold p-5 text-amber-50 cursor-pointer"><FaShopify className=' text-rose-400'/>Globe</h1>

                {/* footer text and designer */}
                <p className='text-white text-sm sm:text-base flex items-center justify-center'>© 2026 ShoppyGlobe | Built with  <FaHeartbeat className='text-red-800 mx-2'/>  by Ritick Kumar</p>
            </div>
        </footer>
    )
}

export default Footer
