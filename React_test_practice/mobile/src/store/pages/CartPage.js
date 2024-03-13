import React from 'react'
import { useSelector } from 'react-redux'
import NavBar from '../components/NavBar'
import { useDispatch } from "react-redux";
import { remove } from '../../cartStore/cartSlice';
const CartPage = ({product}) => {

  const dispatch = useDispatch();
  const {price, image} = product;
 

  return (
     <>
      
 
     <div className="cartCard">
        <img src={image} alt='' />
        <p className="productPrice">${price}</p>
        <button onClick={()=>{dispatch(remove(product))}}>Remove</button>
      </div>
     
     </>
     
  )
}

export default CartPage