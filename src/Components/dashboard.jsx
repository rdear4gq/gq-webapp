import React, { Component } from 'react';

import { Container, Col, Row } from 'react-bootstrap';
import DashboardHeader from "../Components/dashboardHeader.js";
import DashboardNav from "../Components/dashboardNav.jsx";

class Dashboard extends Component {

    state = {

        panes: []

    }

    navButtonClicked = (btnid) => {

        console.log(`Nav Button: ${btnid} Clicked`);

    }

    render() { 
        return (
            <React.Fragment>
                <div className="header-area">
                    <DashboardHeader />
                </div>
                <div className="content-area">
                    <Container fluid={true} >
                        <DashboardNav navButtonClicked={this.navButtonClicked}/>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Dashboard;