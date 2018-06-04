import React from 'react';
import './index.css';

import Main from './components/main/main.js'

class home extends React.Component {
    render() {
      return (
        <div id="home">
          <Main />
        </div>
      );
    }
}

export default home;