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

    const browserMock = (<div class="browser-mockup">
      <pre>
        <code>
          Code Mockup Panel
        </code>
      </pre>
    </div>)

    return (<div>
      <div className="_black section-padding">
        <Container>
          {browserMock}
        </Container>
      </div>
    </div>);
  }
}

export default Alerts;
