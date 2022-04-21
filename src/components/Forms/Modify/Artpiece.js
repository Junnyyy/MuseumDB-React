import React,{useEffect, useState} from "react"
import {useQuery} from 'react-query'

const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

function Artpiece_Modify() {

    const fetchartpieces = async () => {
        const response = await fetch("https://cst2-api.azurewebsites.net/artpiece")
        return response.json();
      };

      const {data,error,isLoading} = useQuery("Art_Piece_Title",fetchartpieces);

    if (error) return <h1>Error: {error.message}, try again!</h1>;
    if(isLoading) return <h1>Loading.......</h1>;

    return (
                <div>
                {data.results.map((artpiece) => (
                    <div> {artpiece.Art_Piece_Title}</div>
                )
                )}
                </div>

    );

 }
 export default Artpiece_Modify;