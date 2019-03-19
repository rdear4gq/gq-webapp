import React, { Component } from 'react';
import './style/App.css';
import LoginPropmpt from './Components/loginPrompt.js';
import MainDashboard from './Components/mainDashboard.js';

const JWT = require('jsonwebtoken');

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
      },
      updateUserInfo: (data) => {
        var decoded = JWT.decode(data.token);
        
        const newUserData = {
          email: decoded.user.email,
          firstName: decoded.user.firstName,
          lastName: decoded.user.lastName,
          authed: true,
          authToken: data.token
        };
        this.setState((state, props) => {
          console.log("SEtting State...");
          return {user: newUserData};
        })
          
      },
      logout: this.logout()
      
    }
  }

  logout() {
    console.log("Logging out...");
  }

  componentWillMount() {
    
  }

  componentWillUpdate() {
    
  }

  render() {

    return (
      <div className="App">
          {(!this.state.user.authed && this.state.user.authToken === null) ? (
              <LoginPropmpt globalState={this.state}/>
          ) : (
            <MainDashboard globalState={this.state}/>
          )}
      </div>
    );
  }
}

export default App;
