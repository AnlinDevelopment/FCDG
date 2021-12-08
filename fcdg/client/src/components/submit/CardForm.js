import React, { Component, useState } from "react";
import Axios from "axios";
import "../../pages/admin/Admin.css";

export default function CardForm(props) {
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const resetFormCard = () => {
    setTitle("");
    setPhoto("");
    setDescription("");
    setLatitude("");
    setLongitude("");
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
      <h1>Submit Card</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="table-dark col-sm-1">
              <button className="submit" type="submit" onClick={submitNewCard}>
                Submit
              </button>
            </th>
            {/* Title entry field */}
            <th scope="col" className="table-dark col-sm-1">
              <label className="required">*</label>
              <input
                type="text"
                name="Title"
                placeholder="Title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </th>
            {/* Description entry field */}
            <th scope="col" className="table-dark col-sm-1">
              <label className="required">*</label>
              <input
                type="text"
                name="Description"
                placeholder="Description"
                value={description}
                required
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </th>
            {/* Upload field */}
            <th scope="col" className="table-dark col-sm-1">
              <label className="p2">(7MB Maximum)</label>
              <label className="required">*</label>
              <input
                type="file"
                name="Photo"
                value={undefined}
                accept="image/gif, image/jpeg, image/png"
                placeholder="Upload File..."
                required
                onChange={(e) => {
                  fileUpload(e);
                }}
              />
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
