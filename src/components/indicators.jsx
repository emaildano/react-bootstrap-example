import React, {Component} from 'react';
import {
  Alert,
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

class Alerts extends Component {

  render() {

    /**
     * Nav with badges / Pills
     */

    function handleSelect(selectedKey) {
      alert(`selected ${selectedKey}`);
    }

    const navPills = (<div>
      <h2>Nav Pills</h2>
      <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
        <NavItem eventKey={1} href="/home">
          Home
          <Badge>42</Badge>
        </NavItem>
        <NavItem eventKey={2} title="Item">
          Profile
        </NavItem>
        <NavItem eventKey={3} disabled="disabled">
          Messages
          <Badge>3</Badge>
        </NavItem>
      </Nav>
    </div>);

    /**
     * Lables
     */

    const Labels = (<div>
      <h2>Labels</h2>
      <Label bsStyle="success">Success</Label>{' '}
      <Label bsStyle="info">Info</Label>{' '}
      <Label bsStyle="warning">Warning</Label>{' '}
      <Label bsStyle="danger">Danger</Label>
    </div>);

    /**
      * Indicators Inverse
      */

    const indicatorsInverseBlack = (<div>
      <Row>
        <Col sm={12}>
          <Well>
            <h4>Oh snap! You got an error!</h4>
            <p>
              Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
            </p>
          </Well>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Alert bsStyle="success">
            <h4>Oh snap! You got an error!</h4>
            <p>
              Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
            </p>
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <h2 className="white">Labels</h2>
          <Label bsStyle="primary">Primary</Label>{' '}
          <Label bsStyle="success">Success</Label>{' '}
          <Label bsStyle="warning">Warning</Label>{' '}
          <Label bsStyle="danger">Danger</Label>
        </Col>
      </Row>
    </div>)

    const indicatorsInversePurple = (<div>
      <Row>
        <Col sm={12}>
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
      <Row>
        <Col sm={12}>
          <h2 className="white">Labels</h2>
          <Label bsStyle="primary">Primary</Label>{' '}
          <Label bsStyle="default">Default</Label>
        </Col>
      </Row>
    </div>)

    return (<div>
      <div className="_gradient-purple section-padding">
        <Grid>
          <PageHeader className="white">
            Indicators <small>Purple</small>
          </PageHeader>
          {indicatorsInversePurple}
        </Grid>
      </div>
      <div className="_gradient-purple-dark section-padding">
        <Grid>
          <PageHeader className="white">
            Indicators <small>Purple Dark</small>
          </PageHeader>
          {indicatorsInverseBlack}
        </Grid>
      </div>
      <div className="_black section-padding">
        <Grid>
          <PageHeader className="white">
            Indicators <small>Black</small>
          </PageHeader>
          {indicatorsInverseBlack}
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
          <Col sm={12}>
            {Labels}
          </Col>
        </Row>
        <Row className="section-padding">
          <Col sm={12}>
            {navPills}
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
