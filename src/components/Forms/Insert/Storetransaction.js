import React from "react";

export default function Store_Transaction(props) {
  return (
    <main>
        <h1>Store Transaction</h1>
        <div>
        <label >Store Transaction ID</label>
        <input type="text"  id="Store Transaction ID"  />
        </div>
        <div>
        <label >Store Customer Name</label>
        <input type="text"  id="Store Customer Name"  />
        </div>
        <div>
        <label >Store Total Bill</label>
        <input type="date"  id="Store Total Bill"  />
        </div>
        <div>
        <label >Store Item ID</label>
        <input type="text"  id="Store Item ID"  />
        </div>
        <div>
        <label >Store Transaction Date</label>
        <input type="text"  id="Store Transaction Date"  />
        </div>
      
    
        <button className="submit">Submit</button>
     
    </main>
  );
}

