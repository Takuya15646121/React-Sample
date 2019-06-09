import React from 'react';
import './App.css';
import firebase from './firebase/firebase';
import SignInScreen from './views/signin';

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

  logout() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="App">
        {this.state.user ?
          (<button onClick={this.logout}>Logout</button>) :
          (<SignInScreen />)
        }
      </div>
    );
  }
}

export default App;
