import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function ModalDelete({
  itemType,
  itemTitle,
  itemId,
  show,
  onCloseModal,
  onDeleteTask,
  onDeleteList,
}) {
  function handleDeleteItem() {
    if (itemType === 'task') onDeleteTask(itemId);
    if (itemType === 'list') onDeleteList(itemId);
    onCloseModal();
  }

  return (
    <Modal show={show} centered>
      <Modal.Header closeButton onClick={onCloseModal}>
        <Modal.Title>{show ? `Remove ${itemType}` : ''}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {show
          ? `Are you sure you want to delete '${itemTitle}' ${itemType}`
          : ''}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCloseModal}>
          No
        </Button>
        <Button variant="danger" onClick={handleDeleteItem}>{`Delete`}</Button>
      </Modal.Footer>
    </Modal>
  );
}
