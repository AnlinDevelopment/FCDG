import React, { useState } from "react";
import Axios from "axios";
import "../Admin.css";

export default function UserForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);

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

  const resetFormUser = () => {
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
      resetFormUser();
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
    <div id="User-Form" className="admin">
      <title>Add a user</title>
      <table>
        <tr>
          <th scope="col">
            <div className="form">
              <h1>Create User</h1>
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
          </th>
        </tr>
      </table>
    </div>
  );
}
