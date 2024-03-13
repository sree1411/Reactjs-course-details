import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
const NavBar = () => {
  const products = useSelector(state =>state.cartState.cartList)
  return (
    <>
    
        <div className="navsection">
                <Link to='/'>
                <div className="title">  Mobiel Shop </div>
                </Link>
                <div className="search">
                    <input type="text" placeholder='search' />
                </div>
               <div className="users">
                    singup/singin 
                </div> 
                <div className="cartItems">
                  <Link to='/cart'>
                  <h1>Cart Items: {products.length}</h1>
                  </Link>
                
                </div> 
        </div>

        <div>
            <div className="submenu">
                <ul>
                    <Link to='/mobile'>
                      <li>Mobile</li>
                    </Link>
                  
                    <li>computer</li>
                    <li>Laptops</li>
                    <li>Gadgets</li>
                </ul>
            </div>
        </div>
    
    
    </>
  )
}

export default NavBar