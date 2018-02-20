import React, { Component } from 'react';
import {
  Navbar,
  NavItem,
  Nav,
  MenuItem,
  NavDropdown,
  Tooltip,
  ButtonToolbar,
  OverlayTrigger,
  Button,
  Grid,
  Row,
  Col,
  PageHeader,
} from 'react-bootstrap';

import Indicators from './components/indicators';
import Navbars from './components/navbars';

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="_gradient-purple-magenta">
          <Indicators />
        </div>
        <Grid>
          <Row>
            <Col>
              <PageHeader>
                Navbar
              </PageHeader>
              <Navbars />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
