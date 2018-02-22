import React, {Component} from 'react';
import {
  Modal,
  Button,
  Grid,
  Row,
  Col,
  PageHeader
} from 'react-bootstrap';

class Modals extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {

    const modalExample = (
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Text in a modal</h4>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    )

    return (
      <div>
        <Grid>
          <PageHeader>
            Modals
          </PageHeader>
          <Row>
            <Col sm={12}>
              <Button onClick={this.handleShow}>
                Launch demo modal
              </Button>
            </Col>
          </Row>
        </Grid>
        {modalExample}
        <div className="section-padding"></div>
      </div>
    );
  }
}

export default Modals;
