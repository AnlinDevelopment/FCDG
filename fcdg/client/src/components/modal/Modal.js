import React from "react";
import Modal from "react-bootstrap/Modal";

//stylesheet
import "./Modal.css";

export default function Mymodal(props) {
  return (
    <Modal
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
    </Modal>
  );
}
