import React, { Component } from 'react';

import '../style/ui-components/nav-btn.css';

class NavButton extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: false
        }
    }
    

    buttonClicked() {
        this.props.clickFn(this.props.btnIndex)
    }

    render() { 
        return (
            <div className={this.props.active ? "nav-btn " + this.props.active : "nav-btn"} onClick={this.buttonClicked.bind(this)}>
                <div className="img noselect">PH</div>
                <div className="text noselect">{this.props.text}</div>
            </div>
        );
    }
}
 
export default NavButton;