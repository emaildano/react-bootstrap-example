import React, {Component} from 'react';
import {Panel, PageHeader, Col, Grid, Row} from 'react-bootstrap';

class Panels extends Component {

  render() {

    const browserMock = (<div class="browser-mockup">
      <pre>
  <code>
    Code Mockup Panel
  </code>
</pre>
    </div>)

    const panelsExample = (<div>
      <Row>
        <Col sm={12}>
          <Panel>
            <Panel.Body>Panel content</Panel.Body>
          </Panel>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Panel>
            <Panel.Body>Panel content</Panel.Body>
            <Panel.Footer>Panel footer</Panel.Footer>
          </Panel>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Panel>
            <Panel.Heading>
              <Panel.Title componentClass="h3">Panel heading</Panel.Title>
            </Panel.Heading>
            <Panel.Body>Panel content</Panel.Body>
            <Panel.Footer>Panel footer</Panel.Footer>
          </Panel>
        </Col>
      </Row>
      <div className="section-padding"></div>
    </div>)

    const panelsFlexExample = (
      <Row>
        <Col sm={6}>
          <Panel className="flex-column">
            <Panel.Heading>
              <Panel.Title componentClass="h3">Panel heading</Panel.Title>
            </Panel.Heading>
            <Panel.Body>Panel content</Panel.Body>
            <Panel.Footer>Panel footer</Panel.Footer>
          </Panel>
          <Panel>
            <Panel.Heading>
              <Panel.Title componentClass="h3">Panel heading</Panel.Title>
            </Panel.Heading>
            <Panel.Body>Panel content</Panel.Body>
            <Panel.Footer>Panel footer</Panel.Footer>
          </Panel>
        </Col>
        <Col className="flex-column" sm={6}>
          <Panel className="flex-grow flex-column">
            <Panel.Heading>
              <Panel.Title componentClass="h3">Panel heading</Panel.Title>
            </Panel.Heading>
            <Panel.Body className="flex-grow">Panel content</Panel.Body>
            <Panel.Footer>Panel footer</Panel.Footer>
          </Panel>
        </Col>
      </Row>
    )

    return (<div>
      <div className="_gradient-purple">
        <Grid>
          <PageHeader className="white">
            Panels <small>Inverse</small>
          </PageHeader>
          {panelsExample}
        </Grid>
      </div>
      <div>
        <Grid>
          <PageHeader>
            Panels
          </PageHeader>
          {panelsExample}
        </Grid>
      </div>
      <div className="_gray-lighter">
        <Grid>
          <PageHeader>
            Panels <small>Gray Lighter</small>
          </PageHeader>
          {panelsExample}
        </Grid>
      </div>
      <div className="_gradient-purple-dark">
        <Grid>
          <PageHeader className="white">
            Panels <small>Purple Dark</small>
          </PageHeader>
          {panelsExample}
        </Grid>
        <Grid>
          <Row>
            <Col sm={6}>
              {browserMock}
            </Col>
          </Row>
          <div className="section-padding"></div>
        </Grid>
        <Grid>
          {panelsFlexExample}
        </Grid>
        <div className="section-padding"></div>
      </div>
    </div>);
  }
}

export default Panels;
