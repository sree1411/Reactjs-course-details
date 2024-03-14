import React from 'react'
import { useCart } from '../context/CartContext'

const Customer = () => {

 const {cartItems} = useCart()


  return (
   <>
       {cartItems.map((item)=>{
            return(
                <div>
                    <img src={item.image} alt="" />
                       {item.company}
                </div>
            )
       })}
   
   </>
  )
}

export default Customer