import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import{ add, remove,reset} from '../features/counterSlice'

const Counters = () => {

     const count = useSelector(state =>state.counterPart.count)
       const dispatch = useDispatch()


  return (
      <>
      
      <div>Counters:{count}</div>
      <button onClick={()=>{dispatch(add())}}> incr</button>
      <button onClick={()=>{dispatch(remove())}}> decrement</button>

      <button onClick={()=>{dispatch(reset())}}> Reset</button>
      
      </>
  )
}

export default Counters