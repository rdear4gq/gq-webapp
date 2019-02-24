import React, { Component } from 'react';
import './style/App.css';
import LoginPropmpt from './Components/loginPrompt.js';
import AppContents from './Components/appContents.js';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      user: {
        email: "",
        firstName: "",
        lastName: "",
        authed: false,
        authToken: null
      }
    }
  }

  render() {

    return (
      
      <div className="App">
        {(this.state.user.authed && this.state.user.authToken === null) ? <AppContents /> : <LoginPropmpt /> }
      </div>
    );
  }
}

export default App;
