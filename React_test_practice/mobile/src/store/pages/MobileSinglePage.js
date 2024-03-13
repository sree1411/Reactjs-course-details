import React from 'react'
import NavBar from '../components/NavBar'
import { mobileData } from '../data/mobiles'
import { Link } from 'react-router-dom'
const MobileSinglePage = () => {
  return (
    <>
         <NavBar/>
          <div className="mobsection">
          {
            mobileData.map((mobile)=>{
              return (
                <div>
                     <div className="imgsection">
                      <Link to={`/mobile/${mobile.id}`}>
                       <img src={mobile.image} alt="mobile" />
                      </Link>
                       
                     </div>
                     <div className="price">
                        {mobile.price}
                     </div>
                     <div className="company">
                         {mobile.company}
                     </div>
                </div>
              )
            })
         }
          </div>
    </>
  )
}

export default MobileSinglePage