import { useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { IHistory, IHistoryProps } from '../../typings/global';

function History({ history }: IHistoryProps) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" className="btn-fight" onClick={handleShow}>
        Show battle's history
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Result</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Player(You)</th>
                <th>Computer</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {history?.map((item: IHistory, index: number) => {
                return (
                  <tr key={`key-${index}`}>
                    <td>{index + 1}</td>
                    <td>{item.player}</td>
                    <td>{item.computer}</td>
                    <td>
                      <b>
                        {item.player_score} - {item.computer_score}
                      </b>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="btn-fight" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default History;
