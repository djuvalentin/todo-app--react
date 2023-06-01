import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalDelete = props => {
  return (
    <Modal show={props.show} centered>
      <Modal.Header closeButton onClick={props.onClose}>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onClose}>
          No
        </Button>
        <Button variant="danger" onClick={props.onDelete}>{`Delete`}</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDelete;
