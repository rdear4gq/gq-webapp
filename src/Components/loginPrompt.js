import React, { Component } from 'react';
import '../style/loginPrompt.css';
import ButtonStd from './btn-std.js';

class LoginPrompt extends Component {
    
    constructor(props) {
        super(props)

        console.log(this.props.globalState);

        this.state = {
            email: ""
        }

        this.refs = {};
        this.refs.email = React.createRef();
        this.refs.password = React.createRef();
    }

    async attempAuth() {

        //Set the user of the state to the emailAddress
        this.state.email = this.refs.email;
        
        const headers = new Headers();
        headers.append('Content-Type', 'Application/json');

        var authAttempt = new Request("/api/users/login", {method: 'POST', headers: headers, body: '{"user": {"username":"' + this.refs.email.value + '", "password":"' + this.refs.password.value + '"}}'})
        fetch(authAttempt)
        .then(res => {
            console.log(res.status);
            if (res.status === 200) {
                return res.json()
            } else {
                throw new Error("There was an error while authenticating");
            }
        })
        .then(jsonData => {

            console.log(jsonData);
            this.props.globalState.updateUserInfo({token: jsonData['token']});

        }).catch(error => console.log(error));
        // .then(resData => {
        //     console.log(resData);
        //     if (resData.err) {
        //         console.log(resData.jsonData.err);
        //     }
        //     console.log(resData.jsonData["token"]);
        // })
        
        
    }

    render() { 

        return (
            <div className="primary-container">
                <div className="LoginBox">
                    <div className="header">Growth Quo</div>
                    <div className="authForm">
                        <input ref="email" type="text" placeholder="email" defaultValue="rdear4@gmail.com" />
                        <input ref="password" type="password" placeholder="password" defaultValue="test1234" />
                        <ButtonStd text="Login" status="inactive" clickFn={this.attempAuth.bind(this)}/>
                    </div>
                </div>
                
            </div>
        );
    }
}
 
export default LoginPrompt;