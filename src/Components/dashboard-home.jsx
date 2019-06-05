import React, { Component } from 'react';

// import ActiveCampaignsTable from "../Components/activeCampaignsTable.js";
// import RecentActivityTable from "../Components/recentActivityTable.js";

import "../style/dashboard-pane.css";
import "../style/dashboard-home.css";

import { Container, Col, Row } from 'react-bootstrap';

class DashboardHome extends Component {
    constructor(props) {
        super(props);

        this.state = {

            org_info: {},
            acct_info: {},
            sug_influencers: [],
            recent_act: []

        }
    }

    componentWillMount() {

        //TO DO:
            

    }

    componentDidMount() {

    }

    render() {

        return (
            
            <div className="content-pane db-home-wrapper">
                <div className="content-area">
                    <Container fluid={true}>
                        <div className="section org-info">
                            <Row>
                                <Col xl={4}>
                                    
                                    <div className="org-img-wrapper">
                                    </div>
                                    <div className="org-name">
                                    </div>
                                    
                                </Col>
                            </Row>
                        </div>                    
                        <div className="section quick-look-tables">
                            <Row>
                                
                                <Col xl={6}>
                                    
                                </Col>
                                <Col xl={6}>
                                </Col>
                            </Row>
                        </div>
                        <div className="section influencer-suggestions-wrapper">
                            <Row>
                            </Row>
                        </div>
                    </Container>
                </div>                
            </div>                
            
        )

    }
    // render() { 
    //     console.log("Dashboard-Home");
    //     console.log(this.props.globalState);
    //     return (
    //         <div style={{"display": (this.props.active) ? "" : "none"}} className="dashboard contentPanel">
    //             <div className="companyInfo">
                    
    //                 <div className="photo"></div>
    //                 <div className="name">{this.props.globalState.organization.name}</div>
                    
                    
    //             </div>
    //             <div className="twoPaneSection">
    //                 <div id="recentActivityTable">
    //                     <RecentActivityTable title="Recent Activity" globalState={this.props.globalState} />
    //                 </div>
    //                 <div id="activeCampaignsTable">
    //                     <ActiveCampaignsTable title="Active Campaigns" globalState={this.props.globalState} />
    //                 </div>
    //             </div>
    //             <div className="suggestedInfluencers"></div>
    //         </div>
    //     );
    // }
}
 
export default DashboardHome;