import React, { Component } from 'react';
import GreenComponent from '../green-component/green-component';
// import AppContext from '../../context/app-context';

class BlueComponent extends Component {
  render() {
    return (
      <div className="blue">
          <p>
            Blue Component
          </p>
          <GreenComponent></GreenComponent>
      </div>
    );
  }
}

export default BlueComponent;
