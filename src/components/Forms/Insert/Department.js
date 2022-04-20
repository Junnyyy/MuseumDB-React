import { React, useState } from "react";
import "./Insert.css";
// import PropTypes from "prop-types";

const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
};

async function department(data) {
    return fetch("https://cst2-api.azurewebsites.net/department", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`,
      },
      mode: "cors",
      body: JSON.stringify(data),
    }).then((data) => data.json());
  }


export default function Department() {

  const [name, setname] = useState();
  const [loc,setloc ] = useState();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await department({
   name,
   loc,

    });

  };

  return (
    <form onSubmit={handleSubmit} >
        <h1>Department</h1>
        <div>
        <label >Department Name</label>
        <input type="text"  className="department" onChange={(e) => setname(e.target.value)}  />
        </div>
        <div>
        <label >Location </label>
        <input type="text"  className="department" onChange={(e) => setloc(e.target.value)}  />
        </div>

        
       
    
        <button className="submit">Submit</button>
     
    </form>
  );
}
