import { useEffect, useState } from "react";
import "./modify.css";

function Storeitem_Table() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [storeitemData, setData] = useState([]);

  const fetchData = () => {
    fetch("https://cst2-api.azurewebsites.net/storeitem", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`,
      },
      mode: "cors",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  async function storeitemModify(data) {
    return fetch("https://cst2-api.azurewebsites.net/storeitem", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`,
      },
      mode: "cors",
      body: data,
    }).then((data) => data.json())
    .then(response => {
      console.log(response)
      return response.json();
    })
  }

  async function storeitemDelete(data) {
    return fetch("https://cst2-api.azurewebsites.net/storeitem", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`,
      },
      mode: "cors",
      body: JSON.stringify(data),
    }).then((data) => data.json());
  }

  useEffect(() => {
    fetchData();
  }, []);


  const delete_Table = (index) => {
    const rows = [...storeitemData];
    storeitemDelete(rows[index]);
    rows.splice(index, 1);
    setData(rows);
  };

  const edit_Table = (index) => {
    const rows = [...storeitemData];
    console.log(rows[index]);
    let json = JSON.stringify(rows[index]);
    setData(rows);
    storeitemModify(json);
  };

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const rowsInput = [...storeitemData];
    rowsInput[index][name] = value;
    setData(rowsInput);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <table className="table">
            <thead>
              <tr>

                          <th>Item Name</th>
                          <th>Quantity In Stock</th>
                          <th>Item Price</th>
                          <th>Number Sold</th>

                          <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {storeitemData.map((data, index)=> {
                      return(
                        <tr key={index}>
                        <td><input type="text" value={data.Item_Name} onChange={(evnt)=>(handleChange(index, evnt))} name="Item_ID" className="form-control"/> </td>
                        <td><input type="text" value={data.Quantity_In_Stock}  onChange={(evnt)=>(handleChange(index, evnt))} name="Quantity_in_Stock" className="form-control"/> </td>
                        <td><input type="text" value={data.Item_Price}  onChange={(evnt)=>(handleChange(index, evnt))} name="Item_Price" className="form-control" /> </td>
                        <td><input type="text" value={data.Number_Sold} onChange={(evnt)=>(handleChange(index, evnt))} name="Number_Sold" className="form-control"/> </td>
            
                        <td><button className="btn btn-outline-success" onClick={()=>(edit_Table(index))}>Edit</button></td>
                        <td><button className="btn btn-outline-danger" onClick={()=>(delete_Table(index))}>Delete</button></td>
                        </tr>
                      )})}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Storeitem_Table;