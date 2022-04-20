import React from "react";

export default function Ticket_Transaction(props) {
  return (
    <main>
        <h1>Ticket Transaction</h1>
        <div>
        <label >Ticket Transaction ID</label>
        <input type="text"  id="Ticket Transaction ID"  />
        </div>
        <div>
        <label >Ticket Customer ID</label>
        <input type="text"  id="Ticket Customer ID"  />
        </div>
        <div>
        <label >Ticket Total Bill</label>
        <input type="datebox"  id="Ticket Total Bill"  />
        </div>
        <div>
        <label >Ticket Exhibit ID</label>
        <input type="text"  id="Ticket Exhibit ID"  />
        </div>
        <div>
        <label >Ticket Transaction Date</label>
        <input type="text"  id="Ticket Transaction Date"  />
        </div>
      
    
        <button className="submit">Submit</button>
     
    </main>
  );
}

