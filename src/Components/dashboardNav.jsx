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
                {text: "Influencers", active: false, img: "img/home.svg"},
                {text: "Messages", active: false, img: "img/message.svg"},
                {text: "Settings", active: false, img: "img/setting.svg"}
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
                <div className={this.props.mobileMenuBarVisible ? "left-all active-br" : "left-all"}>
                    <div className="bar-logo">
                        <a href="#">
                            <img src="img/logo.png" />
                        </a>
                    </div>
                    <div className="lf-sidebar">
                        <ul className="lf-menu">
                            {this.state.buttons.map((obj, i) => {

                                if (obj.text == "Messages" && this.props.messageCount > 0) {
                                    return (<li btn-id={i} key={i} onClick={this.navClicked} className={(obj.active == true) ? "active" : ""}><a href="#"><span><img src={obj.img} alt="" /></span>{obj.text}<span className="msg-c">{this.props.messageCount}</span></a></li>)
                                } else {
                                    return (<li btn-id={i} key={i} onClick={this.navClicked} className={(obj.active == true) ? "active" : ""}><a href="#"><span><img src={obj.img} alt="" /></span>{obj.text}</a></li>)
                                }
                                
                            })}
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default DashboardNav;