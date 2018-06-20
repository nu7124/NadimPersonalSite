import React from 'react';
import './index.css';

import Title from '../components/Title/title';

class home extends React.Component {
    render() {
      return (
        <div id="home">
          <div id="test">
            <Title />
          </div>
          <div id="test2">
          </div>
        </div>
      );
    }
}

export default home;