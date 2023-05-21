import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalDelete = props => {
  const promptMessageTask =
    'Are you sure you want to delete the selected task?';
  const promptMessageList = 'Are you sure you want to delite the entire list?';

  const handleClose = () => props.onHide();
  return (
    <Modal show={props.show} centered>
      <Modal.Header closeButton onClick={handleClose}>
        <Modal.Title>Remove {props.type}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.type === 'task' ? promptMessageTask : promptMessageList}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          No
        </Button>
        <Button
          variant="danger"
          onClick={props.onDelete.bind(props.deletionItemIdentifier)}
        >
          {`Delete ${props.type}`}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDelete;
