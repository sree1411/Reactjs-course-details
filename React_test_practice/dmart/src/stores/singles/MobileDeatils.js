import { useParams } from 'react-router-dom';
import { mobileData } from '../data/mobiles';
import NavBar from '../components/NavBar';
import { useCart } from '../context/CartContext';

const MobileDeatils = () => {
    
  const {id} = useParams()
  const {cartItems, addToCart }= useCart()

  const mobiledetails = mobileData.find((item)=>item.id === id)

  return (
    <div>
            <NavBar/>
            <div className="mbContainer">
                   <div className="image">
                      <img src={mobiledetails.image} alt="" />
                   </div>
              
                 <div className="description">
                   Price:{mobiledetails.price}
                 </div>
                 <div className="description">
                   model:{mobiledetails.model}
                 </div>
                 <div className="description">
                   Descrtiopion:{mobiledetails.description}
                 </div>
                 <button onClick={()=>addToCart(mobiledetails)}> Add To Cart </button>
            </div>
    </div>
  )
}

export default MobileDeatils
