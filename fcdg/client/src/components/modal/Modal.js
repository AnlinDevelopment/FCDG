import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import Tile from "../tiles/Tile";

//stylesheet
import "./Modal.css";

import img from "../../assets/img/etc/reptile.jpg";

function Mymodal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton color>
        <Modal.Title id="contained-modal-title-vcenter">Title Here</Modal.Title>
      </Modal.Header>
      <img src={img}></img>
      <Modal.Body>
        <h>description goes here.</h>
      </Modal.Body>
    </Modal>
  );
}

export default function Modal_toggle(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Open Modal View
      </Button>
      <Mymodal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
