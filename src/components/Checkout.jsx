import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/slices/cartSlice';

function Checkout() {
    const [submitStat, setSubmitStat] = useState(false);//to keep a check on submission of the form
    
    const selector = useSelector((state) => state.cart.items); // to subscribe the slice
    const dispatch = useDispatch(); //to dispatch actions
    
    const navigate = usenavigate()

    const totalPrice = useMemo(()=>{
        const summary = selector.map((product) =>{
            const quant = product.quantity || 1;
            const discount = product.price * (product.discountPercentage /100)
            const amount = (product.price - discount) * quant
            return {...product, quant, discount: amount * quant, amount}
        })

        const subTotal = summary.reduce((acc, item)=>acc + item.price * item.quant,0)
        const totalDiscount = summary.reduce((acc,item)=> acc + item.discount,0)
        const grandTotal = Math.max(0, subTotal - totalDiscount)
        return {summary, subTotal, totalDiscount, grandTotal}
    },[selector])

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        address: "",
        city: "",
        pinCode: ""
    })

    useEffect(()=>{
        if(submitStat){
            setTimeout(()=>{
                navigate("/")
            },3000)
        }
    },[submitStat])

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(clearCart())
        submitStat(true)
    }
    return (
        <div>
           
        </div>
    )
}

export default Checkout
