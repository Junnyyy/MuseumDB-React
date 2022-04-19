async function postData(url = 'http://localhost:3000/Insert') {
   
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  postData('http://localhost:3000/Insert')
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    });

// import { useEffect } from "react";

// const fetchEmployees= () => {
//     return fetch('http://localhost:3000/Insert/Artpiece')
//     .then((employee)=> employee.json())
//     .then((json)=> console.log(json))
//     .catch((error)=> console.error(error));
// }

// useEffect(()=>{
//     fetchData()
// }, []);