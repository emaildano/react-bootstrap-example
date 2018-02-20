import React, {Component} from 'react';
import {
  Panel,
  PageHeader,
  Col,
  Grid,
  Row
} from 'react-bootstrap';

class Panels extends React.Component {

  render() {

    return (<div>
      <Grid>
        <Row>
          <Col sm={12}>
            <PageHeader>
              Panels
            </PageHeader>
            <Panel>
              <Panel.Body>Panel content</Panel.Body>
              <Panel.Footer>Panel footer</Panel.Footer>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </div>);
  }
}

export default Panels;
