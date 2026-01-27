import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/slices/cartSlice';
import { Link, useNavigate } from "react-router-dom";

//icons
import { CiShoppingBasket } from "react-icons/ci"; //
import { FaSadTear } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import { LuPackageOpen } from "react-icons/lu";
import { FaTruck } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";


function Checkout() {
    const [submitStat, setSubmitStat] = useState(false);//to keep a check on submission of the form
    
    const cartItems = useSelector((state) => state.cart.items); // to subscribe the slice
    const dispatch = useDispatch(); //to dispatch actions
    
    const navigate = useNavigate()

    // ---------- totals ----------
    const totals = useMemo(() => {
        const summary = cartItems.map((product) => {
        const qty = product.quantity ?? 1;
        const discountPerUnit =product.price * (product.discountPercentage / 100);
        const totalAmount = (product.price - discountPerUnit) * qty;
        return {...product, qty, discountAmount: discountPerUnit * qty, totalAmount,};
        });

        const subtotal = summary.reduce((acc, item) => acc + item.price * item.qty,0);
        const discountTotal = summary.reduce((acc, item) => acc + item.discountAmount,0);
        const grandTotal = Math.max(0, subtotal - discountTotal);
        return { summary, subtotal, discountTotal, grandTotal };
    }, [cartItems]);

    // ---------- form ----------
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        address: "",
        city: "",
        zipCode: "",
    });

     useEffect(() => {
        if (submitStat) {
        setTimeout(() => navigate("/"), 5000);
        }
    }, [submitStat, navigate]);


    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(clearCart())
        setSubmitStat(true)
    }

    // ---------- empty cart ----------
    if (!cartItems.length && !submitStat) {
        return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-rose-50 to-rose-100 px-4 sm:px-6'>
            <div className='max-w-xl w-full text-center space-y-6 sm:space-y-8 p-6 sm:p-10 rounded-3xl shadow-black shadow-lg'>
                {/* icon of a cart */}
                <div className='w-fit mx-auto'>
                    <CiShoppingBasket size={96} className='sm:hidden text-rose-400'/>
                    <CiShoppingBasket size={152} className='hidden sm:block text-rose-400'/>
                </div>
                {/* div conating a text and a button to browse products */}
                <div>
                    <p className='flex items-center gap-2 text-base sm:text-xl font-serif font-medium justify-center'>Your basket Feels 
                        <FaSadTear size={22} className='sm:hidden text-yellow-400'/>
                        <FaSadTear size={30} className='hidden sm:block text-yellow-400'/>
                    </p>
                    <div className='mt-4 sm:mt-6'>
                        <Link to='/products' className='text-base sm:text-xl font-serif font-medium bg-black px-6 sm:px-8 py-3 sm:py-4 text-white rounded-2xl shadow-md shadow-black hover:bg-gray-700 hover:shadow-lg'>Add something.</Link>
                    </div>
                </div>
            </div>
        </div>             
        );
    }

    // ---------- success ----------
    if (submitStat) {
        return (
        <div className="mt-24 min-h-screen flex items-center justify-center px-6">
            <div className="max-w-xl w-full p-12 rounded-3xl text-center border">
            <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center rounded-full bg-green-500 text-white animate-bounce">
                <LuPartyPopper  size={48} />
            </div>
            <h1 className="text-4xl font-black uppercase mb-4">
                Order Placed
            </h1>
            <p className="text-lg mb-6">
                Thanks <strong>{formData.fullName}</strong>.  
                Confirmation sent to <strong>{formData.email}</strong>.
            </p>
            </div>
        </div>
        );
    }



    
  // ---------- main ----------
  return (
    <div className="py-12 px-4 bg-gradient-to-r from-rose-50 to-rose-100 border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 sm:mt-30 mt-10">
        {/* LEFT */}
        <div className="w-full md:w-[60%] p-8 rounded-2xl border-2 border-rose-400 bg-rose-200">
          <div className="flex items-center gap-2 mb-6">
            <FaCheckCircle  size={20} color='green'/>
            <h2 className="text-xl font-bold">Delivery Information</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              required
              placeholder="Full Name"
              className="w-full p-3 border-2 rounded-xl  border-white bg-gradient-to-r from-rose-50 to-rose-100"
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="w-full p-3 border-2 rounded-xl  border-white bg-gradient-to-r from-rose-50 to-rose-100"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <textarea
              required
              placeholder="Address"
              rows="2"
              className="w-full p-3 border-2 rounded-xl  border-white bg-gradient-to-r from-rose-50 to-rose-100"
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                required
                placeholder="City"
                className="p-3 border-2 rounded-xl  border-white bg-gradient-to-r from-rose-50 to-rose-100"
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
              />
              <input
                required
                placeholder="Zip Code"
                className="p-3 border-2 rounded-xl  border-white bg-gradient-to-r from-rose-50 to-rose-100"
                onChange={(e) =>
                  setFormData({ ...formData, zipCode: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-green-600 text-white font-bold hover:shadow-md hover:shadow-black cursor-pointer"
            >
              Confirm & Pay ${totals.grandTotal.toFixed(2)}
            </button>
          </form>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-[40%] space-y-6">
          <div className="p-6 rounded-2xl border-2 bg-rose-100">
            <div className="flex items-center gap-2 mb-6">
              <LuPackageOpen size={20} />
              <h2 className="text-xl font-bold">Order Summary</h2>
            </div>

            {totals.summary.map((product) => (
              <div key={product.id} className="mb-4 pb-4 border-b">
                <div className="flex gap-4">
                  <img
                    src={
                      product.images?.[0] ||
                      product.thumbnail ||
                      "/placeholder.png"
                    }
                    alt={product.title}
                    className="w-20 h-20 object-contain border rounded bg-white"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{product.title}</h3>
                    <p className="text-xs opacity-70 border w-fit px-2 rounded-3xl bg-rose-400 text-white border-rose-400 shadow-sm shadow-black">
                      {product.brand || "—"}
                    </p>
                    <div className="flex items-center gap-1 text-sm mt-1">
                      <FaTruck  size={14} />
                      Standard Delivery
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-sm space-y-1">
                  <div className="flex justify-between">
                    <span className='font-semibold'>Price</span>
                    <span>
                      ${product.price} × {product.qty}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-1 text-green-600">
                      <IoMdPricetags size={14} /> Discount
                    </span>
                    <span className='text-green-600'>- ${product.discountAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold pt-2 border-t">
                    <span>Total</span>
                    <span>${product.totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout
