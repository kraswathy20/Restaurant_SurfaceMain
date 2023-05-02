import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
function OperatingTime({timeData}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Operating Time
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item>{timeData.Monday}</ListGroup.Item>
      <ListGroup.Item>{timeData.Tuesday}</ListGroup.Item>
      <ListGroup.Item>{timeData.Wednesday}</ListGroup.Item>
      <ListGroup.Item>{timeData.Thursday}</ListGroup.Item>
      <ListGroup.Item>{timeData.Friday}</ListGroup.Item>
      <ListGroup.Item>{timeData.Saturday}</ListGroup.Item>
      <ListGroup.Item>{timeData.Sunday}</ListGroup.Item>
    </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default OperatingTime