import React from 'react'
import { useSelector } from "react-redux";
import CartPage from './CartPage';
import NavBar from '../components/NavBar';
const Cart = () => {
    const cartList = useSelector(state => state.cartState.cartList);
    const total = useSelector(state => state.cartState.total);
    
  return (
     <>
     <main>
          <NavBar/>
       <section className="cart">
        <h1>Cart Items: {cartList.length} /${total}</h1>
        { cartList.map((product) => (
          <CartPage key={product.id} product={product} />
        )) }        
      </section>
    </main>
     
     </>
  )
}

export default Cart