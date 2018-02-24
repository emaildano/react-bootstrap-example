import React, { Component } from 'react';

import Indicators from './components/indicators';
import Cards from './components/cards';
import BrowserMock from './components/browser';
// import Buttons from './components/buttons';
import Modals from './components/modals';
// import Forms from './components/forms';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Indicators />
        <Cards />
        <BrowserMock />
        <Modals />
      </div>
    );
  }
}

export default App;
