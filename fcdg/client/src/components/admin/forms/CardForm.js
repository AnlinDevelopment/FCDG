import React, { useState } from "react";
import Axios from "axios";
import "../Admin.css";
import axios from "axios";

export default function CardForm() {
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");

  const resetFormCard = () => {
    setTitle("");
    setPhoto("");
    setDescription("");
  };

  function fileUpload(e) {
    let files = e.target.files;
    let reader = new FileReader();

    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      console.warn("img data: ", e.target.result.toString().trim());
      let picInfo = e.target.result.toString().trim();
      console.warn("Photo Info: ", picInfo);
      setPhoto(e.target.result.toString().trim());
    };
  }

  // function to create a new entry in the card_info table once the submit button has been clicked.
  // These variables pass to server/index.js to the post cmd.
  const submitNewCard = () => {
    Axios.post("http://localhost:3001/api/insert/cards", {
      BEtitle: title,
      BEphoto: photo,
      BEdescription: description,
    }).then(() => {
      alert("Successful Insert");
    });

    resetFormCard();
  };

  return (
    <div id="Card-Form" className="admin">
      <title>Add a Card</title>
      <table>
        <tbody>
          <tr>
            <th scope="col">
              <div className="form">
                <h1>Create Card</h1>
                <label>Title: </label>
                <input
                  type="text"
                  name="Title"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />

                <label>Photo: </label>
                <input
                  type="file"
                  name="Photo"
                  value={undefined}
                  accept="image/gif, image/jpeg, image/png"
                  placeholder="Upload File..."
                  onChange={(e) => {
                    fileUpload(e);
                  }}
                />

                <label>Description: </label>
                <input
                  type="text"
                  name="Description"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />

                <button onClick={submitNewCard}>Submit</button>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
