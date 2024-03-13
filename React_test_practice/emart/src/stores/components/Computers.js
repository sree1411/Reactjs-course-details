import React from 'react'
import {computerData} from '../data/computers'
const Computers = () => {
    let finalElements = computerData.slice(0,4)
    return (
        <>
         <div className="proTitle">
            <h2>Computers</h2>
          </div>
        <div className='proSection'>
         
          {
            finalElements.map((mobile)=>{
            return ( 
                  <div className='imgBox'>
                      <img src={mobile.image} alt="" />
                  </div>)
            
            })
          }
        </div>
        </>
      )
}

export default Computers
