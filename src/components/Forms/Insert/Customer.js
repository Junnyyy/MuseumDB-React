import { React, useState } from "react";
import "./Insert.css";
// import PropTypes from "prop-types";

const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
};

async function customer(data) {
  return fetch("https://cst2-api.azurewebsites.net/customer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
    mode: "cors",
    body: JSON.stringify(data),
  }).then((data) => data.json());
}

export default function Customer() {
  const [fname, setfname] = useState();
  const [mname, setmname] = useState();
  const [lname, setlname] = useState();
  const [status, setstatus] = useState();
  const [user, setuser] = useState();
  const [password, setpassword] = useState();
  const [email, setemail] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await customer({
      fname,
      mname,
      lname,
      status,
      user,
      password,
      email,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Customer</h1>

      <div>
        <label>First Name</label>
        <input
          type="text"
          className="customer"
          onChange={(e) => setfname(e.target.value)}
        />
      </div>
      <div>
        <label>Middle Name</label>
        <input
          type="text"
          className="customer"
          onChange={(e) => setmname(e.target.value)}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          className="customer"
          onChange={(e) => setlname(e.target.value)}
        />
      </div>
      <div>
        <label> Membership Status</label>
        <select
          className="customer"
          defaultValue={"1"}
          onChange={(e) => setstatus(e.target.value)}
        >
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </div>
      <div>
        <label>Username</label>
        <input
          type="text"
          className="customer"
          onChange={(e) => setuser(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="text"
          className="customer"
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          className="customer"
          onChange={(e) => setemail(e.target.value)}
        />
      </div>

      <button className="submit">Submit</button>
    </form>
  );
}
