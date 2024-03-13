import React from 'react'
import {mobileData} from '../data/mobiles'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const MobilePhone = () => {
  
    let finalElements = mobileData.slice(0,4)

  return (
    <>
     <div className="proTitle">
        <h2>Mobiles</h2>
      </div>
    <div className='proSection'>
     
      {
        finalElements.map((mobile)=>{
        return ( 
              <div className='imgBox'>
                 <Link to="/mobiles">
                 <img src={mobile.image} alt="" />
                 </Link>
        
                 
               
              </div>)
        
        })
      }
    </div>
    </>
  )
}

export default MobilePhone
