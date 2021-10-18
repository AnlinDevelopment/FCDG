import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function CardData(props) {
  const [DBcards, setDBcards] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/api/get/cards").then((response) => {
      // console.log("Front End Card Data: ", response.data);
      setDBcards(response.data);
      console.log(response.data);
    });
  }, []);
  return <div />;
}
