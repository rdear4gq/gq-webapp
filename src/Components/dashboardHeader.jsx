import React, { Component } from 'react';

// import '../style/dashboardHeader.css';
// import '../css/style.css';
// import '../css/all.min.css';

import { Container, Col, Row } from 'react-bootstrap';

class DashboardHeader extends Component {

    constructor(props) {

        super(props);

        this.state = {
            mobileMenuBarVisible: false
        }

    }

    mobileMenuButtonClicked = () => {
        
        console.log("Menu button clicked");

        let mobileMenuBarVisible = !this.state.mobileMenuBarVisible;

        this.setState({mobileMenuBarVisible});

        console.log(`DashboardHeader ${this.state.mobileMenuBarVisible}`);

        this.props.mobileMenuBarButtonCallback(mobileMenuBarVisible);
    }
    
    render() { 
        return (
            <Container fluid={true} >
                <Row>
                    <Col sm={6}>
                        <div className="menu-open">
                            <li className={this.state.mobileMenuBarVisible ? "mobile-bar active-br" : "mobile-bar"} onClick={this.mobileMenuButtonClicked}><span><i className="fal fa-align-left"></i></span></li>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="header-right">
                            <div className="main-menu">
                                <nav>
                                    <ul>
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">Logout</a></li>
                                        <li><a href="#"><span className="notification">
                                            <i className="fal fa-bell"></i>
                                            {(this.props.notificationCount > 0) ? (<span className="notifi-counter">{this.props.notificationCount}</span>) : ""}
                                            
                                        </span></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default DashboardHeader;