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
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get/user").then((response) => {
      console.log("Front End User Data: ", response.data);
      setDBusers(response.data);
    });
  });

  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );

  const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

  let isValid;

  const checkEmail = (isValid) => {
    if (!validEmail.test(email)) {
      setEmailErr(true);
      isValid = false;
    }
    if (validEmail.test(email)) {
      setEmailErr(false);
      isValid = true;
    }
    return isValid;
  };

  const checkPassword = (isValid) => {
    if (!validPassword.test(password)) {
      setPwdError(true);
      isValid = false;
    }

    if (validPassword.test(password)) {
      setPwdError(false);
      isValid = true;
    }
    return isValid;
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setEmailErr("");
    setPwdError("");
  };

  const validate = () => {
    isValid = checkEmail(isValid);
    isValid = checkPassword(isValid);

    if (isValid) {
      submitNewUser();
      resetForm();
    }
  };

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
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <label>Last Name: </label>
        <input
          type="text"
          name="LastName"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <label>Email: </label>
        <input
          type="text"
          name="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>Password (Minimum 6 Characters): </label>
        <input
          type="text"
          name="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button onClick={validate}>Submit</button>
        {emailErr && <p>Your email is invalid</p>}
        {pwdError && <p>Your password is invalid</p>}
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
                      {val.PW}
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
