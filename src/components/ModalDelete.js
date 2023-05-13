import React, { useState, PropTypes } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// const ModalDelete = props => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <Modal show={show} onHide={handleClose} centered>
//       <Modal.Header closeButton>
//         <Modal.Title>Remove task</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>Are you sure you want to delete selected task?</Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           No
//         </Button>
//         <Button variant="primary" onClick={handleClose}>
//           Yes, delete!
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

const ModalDelete = props => {
  const handleClose = () => props.onHide();
  return (
    <Modal show={props.show} centered>
      <Modal.Header closeButton onClick={handleClose}>
        <Modal.Title>Remove task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete selected {props.type}?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          No
        </Button>
        <Button
          variant="danger"
          onClick={props.onDelete.bind(props.deletionItemIdentifier)}
        >
          Yes, delete!
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDelete;
