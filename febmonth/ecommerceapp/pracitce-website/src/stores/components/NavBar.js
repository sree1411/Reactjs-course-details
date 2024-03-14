import {Link} from 'react-router-dom'
import { useCart } from '../context/CartContext'

const NavBar = () => {

   const {cartItems} = useCart()
  return (
     <>
          <div className="navSection">
             <div className="title">
                 <Link to='/'>
                  <h4> D mart app </h4>
                  </Link>
             </div>
             <div className="search">
                <input type="text"  placeholder='search.....'/>    
            </div> 
            <div className="user-details">
                <div className="singup">Sign up</div>
            </div>
            <div className="cart">
               <Link to='/cart' >
                  Cart 
                  item: {cartItems.length}
               </Link>
                
            </div>
          </div>
           <div className="submenu">
              <ul>
               <Link to='/mobiles'>
                   <li>Mobiles</li>
               </Link>
              
                 <li>Computers</li>
                 <li>Kitchen</li>
                 <li>Hard desk </li>
                 <li>Laptops</li>
              </ul>
           </div>
     
     </>
  )
}

export default NavBar
