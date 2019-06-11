import React, { Component } from 'react';
import './App.css';
import SignInScreen from './views/signin';
import HomeScreen from './views/home';

import { actionCreator } from './actions/authenticationAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className="App">
        {this.props.user ?
          (<HomeScreen />) :
          (<SignInScreen />)
        }
      </div>
    );
  }
}

export default  connect(
  state => state.authentication,
  dispatch => bindActionCreators(actionCreator, dispatch)
) (App);
