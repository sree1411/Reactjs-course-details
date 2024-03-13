import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {

const [data, setData] = useState([])
const [task, setTask]= useState([])


 useEffect(()=>{
   axios.get("https://api.escuelajs.co/api/v1/users").then((res)=>{
       setData(res.data)
   })
 }, [])

 const search = ()=>{
       setTask(data.filter((item)=>item.name.toLowerCase().includes(task)))
 }
 
 

  return (
    <div className="App">
      <h1>Welcome to the page</h1>
       
       <input type="text" placeholder="enter the search" onChange={(e)=>setTask(e.target.value)}/>


      <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map((item, i)=>(
<tr key={i}>
      <th scope="row">{item.id}</th>
      <td>{item.name}</td>
      <td>{item.email}</td>
    </tr>
      ))
    }
    
  </tbody>
</table>
    </div>
  );
}

export default App;
