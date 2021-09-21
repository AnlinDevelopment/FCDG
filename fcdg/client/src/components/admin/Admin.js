import "./Admin.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
// import { response } from "express";

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
        {DBusers.map((val) => {
          return (
            <p className="userEntries">
              First Name: {val.FirstName} <br></br>
              Last Name: {val.LastName} <br></br>
              Email: {val.Email} <br></br>
              Password: {val.password} <br></br>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Admin;
