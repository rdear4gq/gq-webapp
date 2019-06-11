import React, { Component } from 'react';

import { Container, Col, Row } from 'react-bootstrap';
import DashboardHeader from "../Components/dashboardHeader.jsx";
import DashboardNav from "../Components/dashboardNav.jsx";
import DashboardHome from "../Components/home/dashboard-home.jsx";
import DashboardCampaigns from "../Components/dashboard-campaigns.jsx";

class Dashboard extends Component {

    constructor(props) {

        super(props);

        this.state = {

            panes: new Map([
                [
                    0,
                    {
                        section: "Home",
                        component: <DashboardHome />
                    }
                ],
                [
                    1,
                    {
                        section: "Campaigns",
                        component: <DashboardCampaigns />
                    }
                ],
                [
                    2,
                    {
                        section: "Reports",
                        component: <DashboardHome />
                    }
                ],
                [
                    3,
                    {
                        section: "Influencers",
                        component: <DashboardHome />
                    }
                ],
                [
                    4,
                    {
                        section: "Messages",
                        component: <DashboardHome />
                    }
                ],
                [
                    5,
                    {
                        section: "Settings",
                        component: <DashboardHome />
                    }
                ]

            ]),
            activePaneIndex: 0,
            notifications: [
                {
                    title: "Notification 1",
                    description: "Influencer Payment Sent",
                    re: "Influencer Id"
                }
            ],
            messages: [
                {
                    subject: "Message 1",
                    body: "This is the body of message 1."
                },
                {
                    subject: "Message 2",
                    body: "This is the body of message 2."
                }
            ],
            mobileMenuBarVisible: false
            
        }
    }

    componentWillMount = () => {

        //TODO: Get Messages from Server
        //TODO: Get Notifications from Server

    }

    navButtonClicked = (btnid) => {

        let activePaneIndex = parseInt(btnid);

        this.setState({ activePaneIndex });

    }

    mobileMenuUpdate = (isVisible) => {

        let mobileMenuBarVisible = isVisible;

        this.setState({ mobileMenuBarVisible });

        console.log(`Dashboard.jsx${this.state.mobileMenuBarVisible}`);

    } 

    render() { 
        
        // console.log(this.state.panes.get(this.state.activePaneIndex).section);
        
        return (
            <React.Fragment>
                <div className={this.state.mobileMenuBarVisible ? "header-area active-br" : "header-area"}>
                    <DashboardHeader notificationCount={this.state.notifications.length} mobileMenuBarButtonCallback={this.mobileMenuUpdate}/>
                </div>
                <div className={this.state.mobileMenuBarVisible ? "content-area active-br" : "content-area"}>
                    <Container fluid={true} >
                        <DashboardNav navButtonClicked={this.navButtonClicked} messageCount={this.state.messages.length} mobileMenuBarVisible={this.state.mobileMenuBarVisible}/>
                        <div className="right-all">
                            {this.state.panes.get(this.state.activePaneIndex).component}
                        </div>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Dashboard;