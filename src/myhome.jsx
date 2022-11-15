import React from 'react'
import { useNavigate, Link, Outlet } from "react-router-dom";



function MyHome() {
  const navigate = useNavigate();
  const myUser = JSON.parse(localStorage.getItem('user'))
  console.log(myUser);


  function clickHandler() {
    localStorage.clear();
    navigate("/");
  }

  return (<div style={{"backgroundColor":" #ffebcc"}}>

    <table style={{width:"100%", fontSize: "300%" }}>
    <tbody>
      <tr>
        {["info", "todos", "posts", "albums"].map((e, i) => (
          <th key={i} style={{border: "solid 5px",backgroundColor:"lightblue" }}>
            <Link to={e}>{e}</Link>
          </th>
        ))}
      </tr>
      </tbody>
    </table>
    <h1>HELLO:</h1>
    <h1> {myUser.name}</h1>

          
  <Outlet />


    <button style={{"width":"100%","backgroundColor":"red","height":"80px","fontSize":"200%"}} onClick={clickHandler}>Log Out</button>

    
  </div>
  );
}

export default MyHome;







