import { mobileData } from "../data/mobiles"
import {Link} from 'react-router-dom'


const MobileProduct = () => {

   let MobileData = mobileData.slice(0,4)

  return (
      <>
         
          <div>
            <h4> Mobile section </h4>
        </div> 
        <div className="cellsection">
            {MobileData.map((mobile)=>{
                return(
                   <>
                    <div className="celldata">
                         <Link to='/mobiles'>
                         <img src={mobile.image} alt="" />
                           {mobile.company}
                         </Link>
                    </div>
                    </>
                )
            })}
        </div>
      
         
      
      </>
  )
}

export default MobileProduct
