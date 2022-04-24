import { React, useState, useEffect } from "react";
import "./Insert.css";
// import PropTypes from "prop-types";

const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
};

async function exhibit(data) {
  return fetch("https://cst2-api.azurewebsites.net/exhibit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
    mode: "cors",
    body: JSON.stringify(data),
  }).then((data) => data.json());
}

export default function Exhibit({ setType, setValid, setMessage }) {
  const [departmentData, setDeData] = useState([]);
  const [complete, setComplete] = useState(false);
  const [fetcherror, setFetcherror] = useState(false);

  const fetchDeData = () => {
    fetch("https://cst2-api.azurewebsites.net/department", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`,
      },
      mode: "cors",
    })
      .then((response) => {
        if (!response.ok) {
          setFetcherror(true);
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        setDeData(data);
      });
  };

  useEffect(() => {
    fetchDeData();
  }, []);

  console.log(departmentData);

  let departmentNames =
    departmentData.length > 0 &&
    departmentData.map((item, i) => {
      return (
        <option key={i} value={item.Department_Name}>
          {item.Department_Name}
        </option>
      );
    });

  const [galleryData, setGaData] = useState([]);

  const fetchGaData = () => {
    fetch("https://cst2-api.azurewebsites.net/gallery", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`,
      },
      mode: "cors",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        setGaData(data);
      });
  };

  useEffect(() => {
    fetchGaData();
  }, []);

  console.log(galleryData);

  let galleryNames =
    galleryData.length > 0 &&
    galleryData.map((item, i) => {
      return (
        <option key={i} value={item.Gallery_Name}>
          {item.Gallery_Name}
        </option>
      );
    });

  const [name, setname] = useState();
  const [arr, setarr] = useState();
  const [depart, setdepart] = useState();
  const [permanent, setpermanent] = useState();
  const [price, setprice] = useState();
  const [manager, setmanager] = useState("Administration");
  const [loc, setloc] = useState("Jones Hall");

  const [errStatus, setErrStatus] = useState(undefined);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await exhibit({
      name,
      arr,
      depart,
      permanent,
      price,
      manager,
      loc,
    });
    // .then(() => {
    //   setErrStatus({ type: "success" });
    // })
    // .catch((error) => {
    //   setErrStatus({ type: "error", error });
    // });
    if (response.error) {
      setType("danger");
      setValid(false);
      setMessage(response.error);
    } else {
      setComplete(true);
    }
  };

  useEffect(() => {
    if (complete == true) {
      setType("success");
      setValid(false);
      setMessage("Exhibit successfully created!");
    }
    if (fetcherror == true) {
      setType("danger");
      setValid(false);
      setMessage("The server has encountered an error.");
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <h1>Exhibit Info</h1>

      <div>
        <label>Exhibit Name</label>
        <input
          type="text"
          className="exhibit"
          onChange={(e) => setname(e.target.value)}
        />
      </div>
      <div>
        <label>Arrival Date</label>
        <input
          type="date"
          className="datebox"
          onChange={(e) => setarr(e.target.value)}
        />
      </div>
      <div>
        <label>Departure Date</label>
        <input
          type="date"
          className="datebox"
          onChange={(e) => setdepart(e.target.value)}
        />
      </div>
      <div>
        <label>Permanent Exhibit</label>
        <select
          className="exhibit"
          onChange={(e) => setpermanent(e.target.value)}
        >
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </div>
      <div>
        <label>Ticket Price</label>
        <input
          type="number"
          className="exhibit"
          onChange={(e) => setprice(e.target.value)}
        />
      </div>
      <div>
        <label>Managing Department</label>
        <select
          className="exhibit"
          onChange={(e) => setmanager(e.target.value)}
        >
          {departmentNames}
        </select>
      </div>
      <div>
        <label>Gallery</label>
        <select className="exhibit" onChange={(e) => setloc(e.target.value)}>
          {galleryNames}
        </select>
      </div>

      <button className="submit">Submit</button>

      {/* {errStatus?.type === "success" && <p>"Submit Successful"</p>}
      {errStatus?.type === "error" && <p>"Error: Submit Failed"</p>} */}
    </form>
  );
}
