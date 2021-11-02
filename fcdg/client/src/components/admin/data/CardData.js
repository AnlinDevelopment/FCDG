import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../Admin.css";

export default function CardData() {
  const [DBcards, setDBcards] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get/cards").then((response) => {
      // console.log("Front End Card Data: ", response.data);
      setDBcards(response.data);
    });
  }, []);

  return (
    <div className="right">
      ---Card Data---
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="table-dark col-sm-1">
              Delete
            </th>
            <th scope="col" className="table-dark col-sm-1">
              Title
            </th>
            <th scope="col" className="table-dark col-sm-1">
              Description
            </th>
            <th scope="col" className="table-dark col-sm-1">
              Photo
            </th>
          </tr>
        </thead>
      </table>
      <div className="table">
        <table className="table tableLayout">
          {DBcards.map((val, index) => {
            return (
              <tbody key={val.id}>
                <tr>
                  <th scope="col" className="table-light text-center col-sm-1">
                    <button
                      onClick={() =>
                        alert(`syscall remove entry by id: ${val.id}`)
                      }
                      className="delbtn"
                    >
                      Delete
                    </button>
                  </th>
                  <th scope="col" className="table-light text-center col-sm-1">
                    {val.title}
                  </th>
                  <th scope="col" className="table-light text-center col-sm-1">
                    {val.description}
                  </th>
                  <th scope="col" className="table-light text-center col-sm-1">
                    {val.photo}
                  </th>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}
