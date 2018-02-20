import React, {Component} from 'react';
import {
  Alert,
  Button,
  Grid,
  Row,
  Col,
  Label,
  Well,
  PageHeader,
  NavItem,
  Nav,
  Badge
} from 'react-bootstrap';

class Alerts extends React.Component {

  render() {

    /**
     * Nav with badges / Pills
     */

    function handleSelect(selectedKey) {
      alert(`selected ${selectedKey}`);
    }

    const navInstance = (
      <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
        <NavItem eventKey={1} href="/home">
          Home <Badge>42</Badge>
        </NavItem>
        <NavItem eventKey={2} title="Item">
          Profile
        </NavItem>
        <NavItem eventKey={3} disabled>
          Messages <Badge>3</Badge>
        </NavItem>
      </Nav>
    );

    /**
     * Lables
     */

     const Labels = (
       <div>
         <Label bsStyle="default">Default</Label>{' '}
         <Label bsStyle="primary">Primary</Label>{' '}
         <Label bsStyle="success">Success</Label>{' '}
         <Label bsStyle="info">Info</Label>{' '}
         <Label bsStyle="warning">Warning</Label>{' '}
         <Label bsStyle="danger">Danger</Label>
       </div>
     );

    return (<div>
      <div className="_gradient-purple-magenta section-padding">
      <Grid>
        <Row>
          <Col sm={12}>
            <PageHeader className="white">
              Indicators <small>Inverse</small>
            </PageHeader>
            <Well className="_white">
              <h4>Oh snap! You got an error!</h4>
              <p>
                Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
              </p>
            </Well>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Alert bsStyle="info">
              <h4>Oh snap! You got an error!</h4>
              <p>
                Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
              </p>
            </Alert>
          </Col>
        </Row>
      </Grid>
    </div>
    <Grid className="section-padding">
      <Row>
        <Col sm={12}>
          <PageHeader>
            Indicators
          </PageHeader>
        </Col>
      </Row>
      <Row className="section-padding">
        <Col sm={4}>
          {Labels}
        </Col>
        <Col sm={6}>
          {navInstance}
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <Alert bsStyle="success">
            <h4>Oh snap! You got an error!</h4>
            <p>
              Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
            </p>
          </Alert>
        </Col>
        <Col sm={4}>
          <Alert bsStyle="warning">
            <h4>Oh snap! You got an error!</h4>
            <p>
              Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
            </p>
          </Alert>
        </Col>
        <Col sm={4}>
          <Alert bsStyle="danger">
            <h4>Oh snap! You got an error!</h4>
            <p>
              Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
            </p>
          </Alert>
        </Col>
      </Row>
    </Grid>
    </div>);
  }
}

export default Alerts;
