import React from 'react'
import {NavLink} from 'react-router-dom'

import {
  FaShoppingBag,
  FaMoon,
  FaDatabase,
  FaShoppingCart
} from "react-icons/fa";
// import { FiZap, FiSmartphone } from "react-icons/fi";
// import { IoShieldCheckmark } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

import Ecommerce from '../assets/Ecommerce.webp'

// // Component for displaying individual feature cards with animation
// const FeatureCard = ({ icon: Icon, title, description, delay }) => (
//   <div 
//     className={`group p-8 rounded-2xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface hover:border-dark-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-slide-up`}
//     style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
//   >
//     <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-light-primary/10 dark:bg-dark-primary/10 text-light-primary dark:text-dark-primary mb-6 group-hover:rotate-12 transition-transform duration-300">
//       <Icon size={28} />
//     </div>
//     <h3 className="text-xl font-bold mb-3 text-light-text dark:text-dark-text">
//       {title}
//     </h3>
//     <p className="text-light-muted dark:text-dark-muted leading-relaxed">
//       {description}
//     </p>
//   </div>
// );


function HomeComponents() {

  //   // Array of features to display in the features section
  // const features = [
  //   {
  //     icon: FaShoppingBag  ,
  //     title: "Product Management",
  //     description: "Advanced product listing with real-time availability and detailed specifications."
  //   },
  //   {
  //     icon: FiZap  ,
  //     title: "Fast Performance",
  //     description: "Built with Vite for near-instant load times and optimized asset delivery."
  //   },
  //   {
  //     icon: IoShieldCheckmark  ,
  //     title: "Secure Checkout",
  //     description: "Fully encrypted payment processing powered by modern security protocols."
  //   },
  //   {
  //     icon: FiSmartphone  ,
  //     title: "Mobile First",
  //     description: "Designed to look stunning on everything from 300px devices to large desktops."
  //   },
  //   {
  //     icon: FaMoon  ,
  //     title: "Adaptive Theme",
  //     description: "Seamless switching between light and dark modes with a single click."
  //   },
  //   {
  //     icon: FaDatabase  ,
  //     title: "Global State",
  //     description: "Centralized cart and product data using React Context API for consistency."
  //   }
  // ];
    return (
        <div className='border bg-gradient-to-r min-h-screen from-rose-200 via-rose-400 dark:bg-dark-bg transition-colors duration-300'>

            <style>@import url('https://fonts.googleapis.com/css2?family=Nosifer&display=swap');</style>

            {/* hero section */}
            <section className='flex mt-24 m-2'>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>

              <section className='relative mt-24 p-5 w-3xl'>
                  <p className='text-gray-600 text-2xl mb-6'>WELCOME TO OUR SHOPPING</p>
                  <p className='font-bold text-black text-6xl mb-6 font-serif'>Discover the</p>
                  <p className='font-extrabold text-orange-400 text-6xl mb-6 font-[Nosifer]'>Latest Trends</p>
                  <p className='font-bold text-gray-600 text-2xl mb-10'>Shop the Best Deals For You</p>
                  <div className='flex gap-4'>
                      <NavLink to='/Products' className='flex items-center justify-center gap-2 ml-7 px-8 border py-4 rounded-lg font-bold bg-orange-400 text-white hover:bg-orange-300 shadow-sm shadow-black hover:shadow-md transition-all duration-300'>Browse Products <FaArrowRightLong /> </NavLink>
                      <NavLink to='Cart' className='flex items-center justify-center gap-2 px-8 border py-4 rounded-lg font-bold bg-transparent text-white shadow-sm shadow-black hover:shadow-md transition-all duration-300'><FaShoppingCart/>View Cart</NavLink>
                  </div>

                  <div className="mt-12 flex gap-8 items-center border-t border-white dark:border-dark-border pt-4 w-xl">
                      <div className='border-r pr-5 border-white'>
                          <p className="text-2xl font-bold text-light-text dark:text-dark-text">10k+</p>
                          <p className="text-sm text-light-muted dark:text-dark-muted">Products</p>
                      </div>
                      <div>
                          <p className="text-2xl font-bold text-light-text dark:text-dark-text">24/7</p>
                          <p className="text-sm text-light-muted dark:text-dark-muted">Support</p>
                      </div>
                  </div>
              </section>

              {/* hero image */}
              <section className='border-2 rounded-xl'>
                <img src={Ecommerce} alt="" className='max-w-2xl my-auto rounded-xl h-full shadow-md shadow-black transform md:rotate-4 hover:rotate-1 transition-transform duration-500'/>
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
