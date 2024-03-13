import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
           <div className="navsection">
              <div className="title">
              <Link to='/'>
                      E mart
                    </Link>
              </div>
                <div className="search">
                    <input type="text" placeholder='search...' />
                </div>
                <div className="user">
                      <div className="user-detail"> SingIn/ Singup</div>
                      <div className="cart"> Cart</div>
                </div>
           </div>
              <div className="sub-menu">
                  <ul>
                    <Link to='/mobiles'>
                       <li>Mobiles</li>
                    </Link>
                    <Link to="/computers">
                    <li>Computers</li>
                    </Link>
                  
                    <li>Kitchen</li>
                    <li>Books</li>
                    <li>Ac</li>
                  </ul>
              </div>
    </div>
  )
}

export default Navbar
