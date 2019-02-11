import React, { Component } from 'react';
import AppContext from '../context/app-context';

class AppProvider extends Component {
    state = {
        number : 10,
        inc: (num) => {
            const newNum = (num) ? num : this.state.number + 1;
            this.setState({number: newNum})
        }
    }

    render() {
        return <AppContext.Provider value={this.state}> {this.props.children}
        </AppContext.Provider>
    }
}

export default AppProvider;
