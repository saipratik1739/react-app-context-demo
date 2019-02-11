import React, { Component } from 'react';
import './App.css';
import RedComponent from '../src/components/red-component/red-component';
import AppProvider from '../src/app-state-management/AppProvider';

class App extends Component {
  render() {
    return (
      <div className="App">
      <AppProvider>
        <RedComponent />
      </AppProvider>
      </div>
    );
  }
}

export default App;
