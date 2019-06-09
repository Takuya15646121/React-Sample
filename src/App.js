import React from 'react';
import './App.css';
import firebase from './firebase/firebase';
import SignInScreen from './views/signin';
import HomeScreen from './views/home';

class App extends React.Component {

  state = {
    loading: true,
    user: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        loading: false,
        user: user
      });
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.user ?
          (<HomeScreen />) :
          (<SignInScreen />)
        }
      </div>
    );
  }
}

export default App;
