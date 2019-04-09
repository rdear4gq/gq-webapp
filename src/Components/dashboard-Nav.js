import React, { Component } from 'react';
import NavButton from '../Components/nav-btn.js';

import '../style/dashboardNav.css';

class DashboardNav extends Component {

    constructor(props) {

        super(props)

        this.state = {
            buttons: [
                {text: "Home", active: true, img: "PH"},
                {text: "Campaigns", active: false, img: "PH"},
                {text: "Reports", active: false, img: "PH"},
                {text: "Influences", active: false, img: "PH"},
                {text: "Messages", active: false, img: "PH"},
                {text: "Settings", active: false, img: "PH"}
            ]
        }
    }
    

    updateActiveBtn(btnID) {
        this.setState((state, props) => {
            const newBtns = this.state.buttons;
            
            newBtns.map((obj) => obj.active = false);

            newBtns[btnID].active = true;

            this.props.navUpdate(btnID);

            return {buttons: newBtns}
        });
    }

    render() { 
        return (
            <div className="nav-dashboard">
                {this.state.buttons.map((obj, i) => <NavButton text={obj.text} btnIndex={i} key={i} img={obj.img} active={obj.active ? "active" : "" } clickFn={this.updateActiveBtn.bind(this)} /> )}
            </div>
        );
    }
}
 
export default DashboardNav;