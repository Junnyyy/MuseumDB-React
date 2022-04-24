import { React, useState } from "react";
import "./Insert.css";
// import PropTypes from "prop-types";

const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
};

async function storeitem(data) {
  return fetch("https://cst2-api.azurewebsites.net/storeitem", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
    mode: "cors",
    body: JSON.stringify(data),
  }).then((data) => data.json());
}

export default function StoreItem({ setType, setValid, setMessage }) {
  const [name, setname] = useState();
  const [quantity, setquantity] = useState();
  const [price, setprice] = useState();
  const [complete, setComplete] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await storeitem({
      name,
      quantity,
      price,
    });
  };

  return (
    <main>
      <h1>Store Item</h1>
      <div>
        <label>Item Name</label>
        <input
          type="text"
          className="storeitem"
          onChange={(e) => setname(e.target.value)}
        />
      </div>
      <div>
        <label>Item Quantity</label>
        <input
          type="number"
          className="storeitem"
          onChange={(e) => setquantity(e.target.value)}
        />
      </div>
      <div>
        <label>Item Price</label>
        <input
          type="number"
          className="storeitem"
          onChange={(e) => setprice(e.target.value)}
        />
      </div>

      <button className="submit">Submit</button>
    </main>
  );
}
