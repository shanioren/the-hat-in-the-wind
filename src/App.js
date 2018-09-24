import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'

import MtWashingtonHatInTheWindContainer from "./components/MtWashingtonHatInTheWindContainer";
import Theme from './themes/Theme'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <div>
          <MtWashingtonHatInTheWindContainer />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
