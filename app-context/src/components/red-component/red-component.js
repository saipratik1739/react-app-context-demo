import React, { Component } from 'react';
import BlueComponent from '../blue-component/blue-component';
import AppProvider from '../../app-state-management/AppProvider';
import AppContext from '../../context/app-context';

class RedComponent extends Component {
    textInput = '';
    onClickBtn(event) {
        const val = (event && event.textInput && event.textInput.value) ? event.textInput.value : 22;
        this.inc(val);
    }
  render() {
    return (
      <div className="red">
          <p>
            RED Component
          </p>
          <input id="blue-textbox" type="text" placeholder="enter number" ref={(input) => this.textInput = input}></input>
          <AppContext.Consumer>
                {(context) =>
                    <div>
                        <button onClick={this.onClickBtn.bind(context, this)}>click</button>
                    </div>
                }
            </AppContext.Consumer>
            <BlueComponent></BlueComponent>
      </div>
    );
  }
}

export default RedComponent;
