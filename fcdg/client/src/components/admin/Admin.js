import "./Admin.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";

function Admin() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    </div>
  );
}

export default Admin;
