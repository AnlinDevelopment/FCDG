import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

//stylesheet
import "./Modal.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton color>
        <Modal.Title id="contained-modal-title-vcenter">
          Title Here{props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>image Here</h1>
      </Modal.Body>
      <Modal.Footer>
        <p>Description Here</p>
      </Modal.Footer>
    </Modal>
  );
}

export default function Mymodal(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Open Modal View
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
