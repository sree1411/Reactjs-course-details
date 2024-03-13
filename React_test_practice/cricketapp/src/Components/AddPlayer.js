import React, { useState } from 'react'

const AddPlayer = () => {

let [newplayer, setNewPlayer] = useState({
    firstname:"",
    dob:"",
    battingStyle:"",
    bowlingStyle:""
})

function addPlayer(){
    fetch('http://localhost:8000/players', {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(newplayer)
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
  }
  
  

  return (
    <div>
        <div className="mb-3 mt-3">
        <input type="text" className="form-control"  onChange={(e)=>{setNewPlayer({...newplayer, firstname:e.target.value})}} placeholder="First Name "/>
        <input type="date" className="form-control" onChange={(e)=>{setNewPlayer({...newplayer, dob:e.target.value})}}   placeholder="Date of birth "/>
        <input type="text" className="form-control" onChange={(e)=>{setNewPlayer({...newplayer, battingStyle:e.target.value})}} placeholder="Batting style"/>
        <input type="text" className="form-control" onChange={(e)=>{setNewPlayer({...newplayer, bowlingStyle:e.target.value})}}  placeholder="Bowling style "/>
        <button onClick={addPlayer}>  Add-Player </button>


     
  </div>
    </div>
  )
}

export default AddPlayer
