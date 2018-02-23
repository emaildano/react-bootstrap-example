import React, {Component} from 'react';
import {
  Alert,
  Container,
  Row,
  Col,
  Label,
  NavItem,
  Nav,
  Badge
} from 'reactstrap';

class Alerts extends Component {

  render() {

    /**
     * Lables
     */

    const Badges = (<div>
      <Badge color="primary">Primary</Badge>{' '}
      <Badge color="secondary">Secondary</Badge>{' '}
      <Badge color="success">Success</Badge>{' '}
      <Badge color="danger">Danger</Badge>{' '}
      <Badge color="warning">Warning</Badge>{' '}
      <Badge color="info">Info</Badge>{' '}
      <Badge color="light">Light</Badge>{' '}
      <Badge color="dark">Dark</Badge>
    </div>);

    /**
      * Indicators Inverse
      */

    const indicatorsInverseBlack = (<div>
      <Row>
        <Col sm={12}>
          <Alert>
            <h4>Oh snap! You got an error!</h4>
            <p>
              Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
            </p>
          </Alert>
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
          <h3 className="white">Badges</h3>
            <Badge color="white">Primary</Badge>{' '}
            <Badge color="success">Success</Badge>{' '}
            <Badge color="danger">Danger</Badge>{' '}
            <Badge color="warning">Warning</Badge>{' '}
            <Badge color="info">Info</Badge>{' '}
            <Badge color="light">Light</Badge>{' '}
            <Badge color="dark">Dark</Badge>
        </Col>
      </Row>
    </div>)

    const indicatorsInversePurple = (<div>
      <Row>
        <Col sm={12}>
          <Alert color="white">
            <h4>Oh snap! You got an error!</h4>
            <p>
              Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
            </p>
          </Alert>
          <Alert color="purple-dark">
            <h4>Oh snap! You got an error!</h4>
            <p>
              Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
            </p>
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <h2 className="white">Badges</h2>
            <Badge color="white">Primary</Badge>{' '}
            <Badge color="danger">Danger</Badge>{' '}
            <Badge color="warning">Warning</Badge>{' '}
            <Badge color="info">Info</Badge>{' '}
            <Badge color="light">Light</Badge>{' '}
            <Badge color="dark">Dark</Badge>
        </Col>
      </Row>
    </div>)

    return (<div>
      <div className="_gradient-purple section-padding">
        <Container>
          <h2 className="white">
            Indicators <small>Purple</small>
        </h2>
          {indicatorsInversePurple}
        </Container>
      </div>
      <div className="_gradient-purple-dark section-padding">
        <Container>
          <h2 className="white">
            Indicators <small>Purple Dark</small>
        </h2>
          {indicatorsInverseBlack}
        </Container>
      </div>
      <div className="_black section-padding">
        <Container>
          <h2 className="white">
            Indicators <small>Black</small>
        </h2>
          {indicatorsInverseBlack}
        </Container>
      </div>
      <Container>
        <Row>
          <Col sm={12}>
            <h2>
              Indicators
            </h2>
          </Col>
        </Row>
        <Row className="section-padding">
          <Col sm={12}>
            {Badges}
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
      </Container>
    </div>);
  }
}

export default Alerts;
