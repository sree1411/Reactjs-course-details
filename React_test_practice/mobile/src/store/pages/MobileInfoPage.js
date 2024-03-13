import React from 'react'
import {useParams } from 'react-router-dom'
import { mobileData } from '../data/mobiles'
import { add } from '../../cartStore/cartSlice'
import {useDispatch} from 'react-redux'
import NavBar from '../components/NavBar'

const MobileInfoPage = () => {

  const {id} = useParams()
  const dispatch = useDispatch()
 
  const products = mobileData.find((item)=>item.id === id)

  return (
     <>
     <div> <NavBar/></div>

      <div className="mobInfo">
      <div className="imgPage">
         <img src={products.image} alt="" />
      </div>
      <div className="productDeatils">
            <div className="model">
              {products.model}
            </div>
            <div className="model">
              {products.price}
            </div>
            <div className="company">
              {products.company}
            </div>
            <div className="company">
              {products.description}
            </div>
            <div className="addtocart">
            {products.category}
            </div>
         
              <button onClick={()=>{dispatch(add(products))}}> ADD TO CART</button>
         
      </div>
      </div>
     
     </>
     
  )
}

export default MobileInfoPage