import React from 'react'
import {mobileData} from '../data/mobiles'
import { Link } from 'react-router-dom'

const MobileData = () => {

  const mobiles = mobileData.slice(0, 4)

  return (
  <>
    <div>MobileData</div>
     <div className='mobiles'>
     {
        mobiles.length>0 && mobiles.map((mobile, i)=>{
            return (
                <div  key={i}>
                      
                      <div className="imageSec">
                       <Link to="/mobile">
                        <img src={mobile.image} alt="images" />
                        </Link>
                      </div>
                    
                      <div className="company">
                        {mobile.company}
                      </div>
                      <div className="company">
                        {mobile.model}
                      </div>
                </div>
            )
        })
    }
     </div>
  
  </>
     
  )
}

export default MobileData