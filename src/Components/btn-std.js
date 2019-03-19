import React, { Component } from 'react';
import '../style/ui-components/ui-elements.css';

class ButtonStd extends Component {

    render() { 
        return (
            <div className={"noselect btn btn-std " + this.props.status} onClick={this.props.clickFn}>{this.props.text}</div>
        );
    }
}
 
export default ButtonStd;