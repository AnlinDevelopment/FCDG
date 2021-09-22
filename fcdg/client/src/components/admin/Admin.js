import "./Admin.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { table } from "bootstrap";

function Admin() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setuserInfo] = useState("");
  const [DBusers, setDBusers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get/user").then((response) => {
      console.log("Front End User Data: ", response.data);
      setDBusers(response.data);
    });
  });

  //function to create a new user and submit it to the database.
  //These variables pass to server/index.js to the post cmd
  const submitNewUser = () => {
    Axios.post("http://localhost:3001/api/insert", {
      BEfirstName: firstName,
      BElastName: lastName,
      BEemail: email,
      BEpassword: password,
    }).then(() => {
      alert("Successful Insert");
    });
  };

  const submitGetUser = () => {
    Axios.post("http://localhost:3001/api/get/user", {}).then(() => {
      alert("Data has been returned!");
    });
  };

  return (
    <div id="Admin-Main" className="admin">
      <title>FCDG Administration</title>
      <div className="form">
        <label>First Name: </label>
        <input
          type="text"
          name="FirstName"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <label>Last Name: </label>
        <input
          type="text"
          name="LastName"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <label>Email: </label>
        <input
          type="text"
          name="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>Password: </label>
        <input
          type="text"
          name="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button onClick={submitNewUser}>Submit</button>
      </div>
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
                    <td
                      scope="row"
                      className="table-light text-center col-sm-1"
                    >
                      {index + 1}
                    </td>
                    <td
                      scope="col"
                      className="table-light text-center col-sm-1"
                    >
                      {val.FirstName}
                    </td>
                    <td
                      scope="col"
                      className="table-light text-center col-sm-1"
                    >
                      {val.LastName}
                    </td>
                    <td
                      scope="col"
                      className="table-light text-center col-sm-1"
                    >
                      {val.password}
                    </td>
                    <td
                      scope="col"
                      className="table-light text-center col-sm-1"
                    >
                      {val.Email}
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;
