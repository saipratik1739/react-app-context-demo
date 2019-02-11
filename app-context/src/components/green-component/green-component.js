import React, { Component } from 'react';
import AppContext from '../../context/app-context';

class GreenComponent extends Component {
  render() {
    return (
      <div className="green">
          <p>
            GREEN Component
          </p>
            <AppContext.Consumer>
                {(context) => context.number}
            </AppContext.Consumer>
      </div>
    );
  }
}

export default GreenComponent;
