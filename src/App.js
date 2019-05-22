import React, { Component } from 'react';
// import { BrowserRouter } from 'react-router-dom';

import './style/App.css';
import LoginPropmpt from './Components/loginPrompt.js';
import MainDashboard from './Components/mainDashboard.js';

const JWT = require('jsonwebtoken');

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      user: {},
      authed: false,
      authToken: null,
      organization: {},
      updateUserInfo: (data) => {
        var decoded = JWT.decode(data.token);
        
        let newUserData = {
          user: decoded.user,
          authed: true,
          authToken: data.token,
          organization: {}
        };
        
        // this.setState((state, props) => {
          
        //   return newUserData;
        // });

        fetch("http://wraughn.com:4003/api/organizations/user/" + newUserData.user._id)
        .then(res => {
            return res.json();
        })
        .then(json => {
          
          newUserData["organization"] = json;
          // console.log("New User Data:");
          // console.log(newUserData);
          // this.setState((state, props) => {
          //   return newUserData;
          // });
          let user = newUserData.user;
          let authed: true;
          let authToken = newUserData.authToken;
          let organization = newUserData.organization;

          this.setState({ user, authed, authToken, organization });
            // console.log(this.state);
        })
        .catch(error => console.log(error));

        

      },
      logout: this.logout
    }

  }

  logout() {
    // console.log("Logging out...");
  }

  componentWillMount() {
    
  }

  componentWillUpdate() {
    
  }

  render() {
    // console.log(this.state);
    return (
      <div className="App">
          {(!this.state.authed && this.state.authToken === null) ? (
              <LoginPropmpt globalState={this.state}/>
          ) : (
            <MainDashboard globalState={this.state}/>
          )}
      </div>
    );
  }
}

export default App;
