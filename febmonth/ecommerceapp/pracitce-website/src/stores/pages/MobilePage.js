import NavBar from "../components/NavBar"
import { mobileData } from "../data/mobiles"
import {Link } from 'react-router-dom'
const MobilePage = () => {
  return (
     <>
         <NavBar/>
         {mobileData.map((item)=>{
            return(
                 <div>
                  <Link to={`/mobiles/${item.id}`}>
                     <img src={item.image} alt="" />
                     <div> Price {item.price}</div>
                     <div> Description {item.description}</div>
                  </Link>
                 
                 </div>  
            )
         })}
     </>
  )
}

export default MobilePage
