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

  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

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

    const indicatorsBlack = (<div>
      <Row>
        <Col sm={12}>
          <Alert color="white" isOpen={this.state.visible} toggle={this.onDismiss}>
            <h4>Alert!</h4>
            <p>
              Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
            </p>
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
            <h4>Alert!</h4>
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
            <Badge color="light">Light</Badge>{' '}
            <Badge color="dark">Dark</Badge>
        </Col>
      </Row>
    </div>)

    const indicatorsPurple = (<div>
      <Row>
        <Col sm={12}>
          <Alert color="white" isOpen={this.state.visible} toggle={this.onDismiss}>
            <h4>Alert!</h4>
            <p>
              Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
            </p>
          </Alert>
          <Alert color="purple-dark" isOpen={this.state.visible} toggle={this.onDismiss}>
            <h4>Alert!</h4>
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
      <div className="section-padding">
        <Container>
          <Row>
            <Col sm={12}>
              <h2>
                Indicators
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              {Badges}
            </Col>
          </Row>
          <Row className="section-padding">
            <Col sm={4}>
              <Alert color="success">
                <h4>Alert!</h4>
                <p>
                  Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
                </p>
              </Alert>
            </Col>
            <Col sm={4}>
              <Alert color="warning">
                <h4>Alert!</h4>
                <p>
                  Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
                </p>
              </Alert>
            </Col>
            <Col sm={4}>
              <Alert color="danger">
                <h4>Alert!</h4>
                <p>
                  Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
                </p>
              </Alert>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="_gradient-purple section-padding">
        <Container>
          {indicatorsPurple}
        </Container>
      </div>
      <div className="_gradient-purple-dark section-padding">
        <Container>
          {indicatorsBlack}
        </Container>
      </div>
      <div className="_black section-padding">
        <Container>
          {indicatorsBlack}
        </Container>
      </div>
    </div>);
  }
}

export default Alerts;
