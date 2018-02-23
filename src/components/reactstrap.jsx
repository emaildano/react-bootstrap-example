import React, {Component} from 'react';
import {
  Button,
  Alert
} from 'reactstrap';

class Reactstrap extends Component {

  render() {

    return (<div>
      <Button color="danger">Button</Button>
      <Alert color="primary">
        This is a primary alert — check it out!
      </Alert>
    </div>);
  }
}

export default Reactstrap;
