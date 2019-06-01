import React, { Component } from 'react';
import NavButton from '../Components/nav-btn.js';

// import '../style/dashboardNav.css';

class DashboardNav extends Component {

    constructor(props) {

        super(props)

        this.state = {
            buttons: [
                {text: "Home", active: true, img: "img/home.svg"},
                {text: "Campaigns", active: false, img: "img/campaign.svg"},
                {text: "Reports", active: false, img: "img/report.svg"},
                {text: "Influences", active: false, img: "img/home.svg"},
                {text: "Messages", active: false, img: "img/message.svg"},
                {text: "Settings", active: false, img: "img/settings.svg"}
            ]
        }
    }

    navClicked = (e) => {

        let buttons = [...this.state.buttons];

        this.state.buttons.map((obj, i) => {

            obj.active = (i == parseInt(e.target.getAttribute('btn-id')) ? true : false);

        });

        this.setState({ buttons });

        this.props.navButtonClicked(e.target.getAttribute('btn-id'));
    }

    render() { 

        return (
            <React.Fragment>
                <div className="left-all">
                    <div className="bar-logo">
                        <a href="#">
                            <img src="img/logo.png" />
                        </a>
                    </div>
                    <div className="lf-sidebar">
                        <ul className="lf-menu">
                            {this.state.buttons.map((obj, i) => {
                                return (<li btn-id={i} key={i} onClick={this.navClicked} className={(obj.active == true) ? "active" : ""}><a href="#"><span><img src={obj.img} alt="" /></span>{obj.text}</a></li>)
                            })}
                        </ul>
                    </div>
                </div>
                <div className="right-all">
                </div>
            </React.Fragment>
        );
    }
}
 
export default DashboardNav;