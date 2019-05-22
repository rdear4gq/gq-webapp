import React, { Component } from 'react';

// import '../style/dashboardHeader.css';
import '../css/style.css';
import '../css/all.min.css';

import { Container, Col } from 'react-bootstrap';

class DashboardHeader extends Component {
    
    render() { 
        return (
            <div className="header-area">
                <Container fluid={true}>
                    <div className="row">
                        <Col sm={6}>
                            <div className="menu-open">
                                <li className="mobile-bar"><span><i className="fal fa-align-left"></i></span></li>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="header-right">
                                <div className="main-menu">
                                    <nav>
                                        <ul>
                                            <li><a href="#">Support</a></li>
                                            <li><a href="#">Logout</a></li>
                                            <li><a href="#">
                                                <span class="notification">
                                                    <i class="fal fa-bell"></i>
                                                    <span class="notifi-counter">3</span>
                                                </span>
                                            </a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </Col>
                    </div>
                </Container>
            </div>
        );
    }
}
 
export default DashboardHeader;