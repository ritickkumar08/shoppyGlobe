import React from 'react'
import {NavLink} from 'react-router-dom'

import { FaShoppingCart} from "react-icons/fa";
// import { FiZap, FiSmartphone } from "react-icons/fi";
// import { IoShieldCheckmark } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

import Ecommerce from '../assets/Ecommerce.webp'

/*
  Home page hero component.
  This component is intentionally stateless and presentation-focused.
*/

function HomeComponents() {
    return (
        <div className='min-h-screen bg-gradient-to-r from-rose-200 to-rose-300 transition-colors duration-300 relative border overflow-hidden'>

            <style>@import url('https://fonts.googleapis.com/css2?family=Nosifer&display=swap');</style>
            
            {/* Background overlay.Parent is relative to ensure absolute positioning behaves predictably.*/}
            <div className="absolute hidden md:block inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent pointer-events-none"></div>

            {/* hero section */}
            <section className='flex flex-col lg:flex-row mt-24 m-2 gap-10'>

              <section className='relative mt-12 lg:mt-24 p-5 w-full lg:max-w-3xl'>
                  <p className='text-gray-600 text-base sm:text-xl md:text-2xl mb-4 sm:mb-6'>WELCOME TO OUR SHOPPING</p>
                  <p className='font-bold text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 font-serif'>Discover the</p>
                  <p className='font-extrabold text-orange-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 font-[Nosifer]'>Latest Trends</p>
                  <p className='font-bold text-gray-600 text-base sm:text-xl md:text-2xl mb-6 sm:mb-10'>Shop the Best Deals For You</p>
                  <div className='flex flex-col sm:flex-row gap-4'>
                      <NavLink to='/Products' className='flex items-center justify-center gap-2 sm:ml-7 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold bg-orange-400 text-white hover:bg-orange-300 shadow-sm shadow-black hover:shadow-md transition-all duration-300'>Browse Products <FaArrowRightLong /> </NavLink>
                      <NavLink to='/Cart' className='flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold bg-rose-400 text-white shadow-sm shadow-black hover:shadow-md transition-all duration-300'><FaShoppingCart/>View Cart</NavLink>
                  </div>

                  <div className='mt-10 sm:mt-12 flex gap-6 sm:gap-8 items-center border-t border-white pt-4 w-full sm:max-w-xl'>
                      <div className='border-r pr-4 sm:pr-5 border-white'>
                          <p className='text-xl sm:text-2xl font-bold dark:text-dark-text'>10k+</p>
                          <p className='text-xs sm:text-sm dark:text-dark-muted'>Products</p>
                      </div>
                      <div>
                          <p className='text-xl sm:text-2xl font-bold dark:text-dark-text'>24/7</p>
                          <p className='text-xs sm:text-sm dark:text-dark-muted'>Support</p>
                      </div>
                  </div>
              </section>

              {/* hero image */}
              <section className='border-2 rounded-xl flex justify-center'>
                <img src={Ecommerce} alt="" className='w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl rounded-xl shadow-md shadow-black transform md:rotate-4 hover:rotate-1 transition-transform duration-500'/>
              </section>
            </section>

            {/* --- Features Section ---
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-light-text dark:text-dark-text mb-4">
              Platform Features
            </h2>
            <p className="text-light-muted dark:text-dark-muted max-w-xl mx-auto">
              Everything you need to manage a modern e-commerce storefront efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                {...feature}
                delay={index * 100} // Incremental delay for the slide effect
              />
            ))}
          </div>
        </div> */}
      {/* </section> */}
    </div>
    )
}

export default HomeComponents
