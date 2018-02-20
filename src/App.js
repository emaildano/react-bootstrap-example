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
import Panels from './components/panels';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Indicators />
        <Panels />
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
