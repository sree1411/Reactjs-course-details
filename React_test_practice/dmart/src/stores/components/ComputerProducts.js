import {computerData} from '../data/computers'

const ComputerProducts = () => {
    let MobileData = computerData.slice(0,4)
  return (
     <>
       <div>
            <h4> Computer section </h4>
        </div> 
        <div className="cellsection">
            {MobileData.map((mobile)=>{
                return(
                   <>
                    <div className="celldata">
                        <img src={mobile.image} alt="" />
                           {mobile.company}
                    </div>
                    </>
                )
            })}
        </div>
     
     </>
  )
}

export default ComputerProducts
