
import { useEffect } from "react";

const fetchEmployees= () => {
    return fetch('')
    .then((employee)=> employee.json())
    .then((json)=> console.log(json))
    .catch((error)=> console.error(error));
}

useEffect(()=>{
    fetchData()
}, []);
