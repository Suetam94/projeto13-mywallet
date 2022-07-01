import { Button, Modal } from "react-bootstrap";

interface GeneralModalProps {
  showModal: boolean;
  handleClose: () => void;
  modalTitle: string;
  modalMessage: string;
}

export function GeneralModal({
  showModal,
  handleClose,
  modalTitle,
  modalMessage,
}: GeneralModalProps) {
  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title style={{ fontSize: "20px" }}>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "#a328d6", border: "none" }}
            onClick={handleClose}
          >
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
