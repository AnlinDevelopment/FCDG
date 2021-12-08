import React from "react";
import Modal from "react-bootstrap/Modal";

//stylesheet
import "./Modal.css";

export default function Mymodal(props) {
  const dbloc = "36.958118,-120.390618";
  const userloc = "36.831497,-119.683111";
  const directions_url = `https://www.google.com/maps/dir/${userloc}/${dbloc}/`;

  return (
    <Modal
      className="modal"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton color>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <img src={props.img} alt=""></img>
      <Modal.Body>
        <label>{props.description}</label>
      </Modal.Body>
      <a //onclick link to directions page
        target="_blank"
        href={directions_url}
      >
        <img //link for rendered map
          src="https://maps.googleapis.com/maps/api/staticmap?autoscale=false&size=1000x1000&maptype=roadmap&key=AIzaSyCzRLyUMPIizb15X7SrckiLsbbNDWjhuKE&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C36.849334,+-119.808033"
        />
      </a>
    </Modal>
  );
}
