import React from "react";
import Modal from "react-bootstrap/Modal";

//stylesheet
import "./Modal.css";

export default function Mymodal(props) {
  //This api key is for testing purposes only; it will need to be changed.
  const API_KEY = "AIzaSyCzRLyUMPIizb15X7SrckiLsbbNDWjhuKE";

  //constructs dynamic navigation URL
  const directions_url = `https://www.google.com/maps/dir//${props.lat},${props.lon}/@${props.lat},${props.lon},14z`;

  //Constructs map png image with single marker
  const map_url = `https://maps.googleapis.com/maps/api/staticmap?autoscale=1&size=600x300&maptype=roadmap&key=${API_KEY}&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C${props.lat},${props.lon}`;

  return (
    <Modal
      className="modal"
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton title="Close">
        <Modal.Title id="contained-modal-title-vcenter" title="">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <img className="image" title="" src={props.img} alt="" />
      <Modal.Body title="">
        <label>{props.description}</label>
        <br />
        <a title="" rel="noreferrer" target="_blank" href={directions_url}>
          <img className="image" title="Directions" src={map_url} alt="" />
        </a>
      </Modal.Body>
    </Modal>
  );
}
