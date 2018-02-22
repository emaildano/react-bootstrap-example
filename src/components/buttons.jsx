import React, {Component} from 'react';
import {
  Button,
  ButtonToolbar,
  PageHeader,
  Grid,
  Row,
  Col
} from 'react-bootstrap';

class Buttons extends Component {

  render() {

    return (<div>
      <div className="_gradient-purple section-padding">
        <Grid>
          <PageHeader className="white">
            Buttons <small>Inverse</small>
          </PageHeader>
          <Row>
            <Col sm={12}>
              <ButtonToolbar>
                <Button>Default</Button>
                <Button className="btn-outline">Default Outline</Button>
                <Button bsStyle="primary">Primary</Button>
                <Button bsStyle="info">Info</Button>
                <Button bsStyle="warning">Warning</Button>
                <Button bsStyle="danger">Danger</Button>
              </ButtonToolbar>
            </Col>
          </Row>
        </Grid>
      </div>
      <Grid>
        <PageHeader>
          Buttons
        </PageHeader>
        <Row>
          <Col sm={12}>
            <ButtonToolbar>
              <Button>Default</Button>
              <Button className="btn-outline-success">Default Outline</Button>
              <Button className="btn-outline-primary">Primary Outline</Button>
              <Button bsStyle="success">Success</Button>
              <Button bsStyle="warning">Warning</Button>
              <Button bsStyle="danger">Danger</Button>
              <Button bsStyle="link">Link</Button>
            </ButtonToolbar>
          </Col>
        </Row>
      </Grid>
      <div className="section-padding"></div>
    </div>)
  }
}

export default Buttons;
