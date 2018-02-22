import React, { Component } from 'react';

import Indicators from './components/indicators';
import Panels from './components/panels';
import Buttons from './components/buttons';
import Modals from './components/modals';
import Forms from './components/forms';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Indicators />
        <Panels />
        <Buttons />
        <Modals />
        <Forms />
      </div>
    );
  }
}

export default App;
