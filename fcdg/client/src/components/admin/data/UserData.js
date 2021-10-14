import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../Admin.css";

export default function UserData() {
  const [userInfo, setuserInfo] = useState("");
  const [DBusers, setDBusers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get/user").then((response) => {
      // console.log("Front End User Data: ", response.data);
      setDBusers(response.data);
    });
  });

  return (
    <div className="right">
      ---List Of Users---
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="table-dark col-sm-1">
              ID
            </th>
            <th scope="col" className="table-dark col-sm-1">
              First Name
            </th>
            <th scope="col" className="table-dark col-sm-1">
              Last Name
            </th>
            <th scope="col" className="table-dark col-sm-1">
              Password
            </th>
            <th scope="col" className="table-dark col-sm-1">
              Email
            </th>
          </tr>
        </thead>
      </table>
      <div className="table">
        <table className="table tableLayout">
          {DBusers.map((val, index) => {
            return (
              <tbody>
                <tr>
                  <td scope="row" className="table-light text-center col-sm-1">
                    {index + 1}
                  </td>
                  <td scope="col" className="table-light text-center col-sm-1">
                    {val.FirstName}
                  </td>
                  <td scope="col" className="table-light text-center col-sm-1">
                    {val.LastName}
                  </td>
                  <td scope="col" className="table-light text-center col-sm-1">
                    {val.PW}
                  </td>
                  <td scope="col" className="table-light text-center col-sm-1">
                    {val.Email}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}
