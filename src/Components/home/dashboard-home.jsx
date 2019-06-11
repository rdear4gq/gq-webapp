import React, { Component } from 'react';



// import ActiveCampaignsTable from "../Components/activeCampaignsTable.js";
// import RecentActivityTable from "../Components/recentActivityTable.js";

import "../../style/dashboard-pane.css";
import "../../style/dashboard-home.css";

import { Container, Col, Row } from 'react-bootstrap';

// import QuickLookTableRow from "../home/quick-look-table-row.jsx";
import QuickLookTableActiveCampaigns from "../home/quick-look-table-activeCampaigns.jsx";
import QuickLookTableRecentActivity from "../home/quick-look-table-recentActivity.jsx";

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
                                <Col xl="auto">
                                    
                                    <div className="org-img-wrapper">
                                    </div>
                                    
                                    
                                </Col>
                                <Col>
                                    <div className="org-name-wrapper">
                                        
                                    </div>
                                </Col>
                                <Col xl={6} className="org-budget-wrapper-outer">
                                    <div className="org-budget-wrapper-inner">
                                        <div className="label-wrapper-outer">
                                            <span className="label-wrapper-inner">Budget</span>
                                        </div>
                                        <div className="value-wrapper-outer">
                                            <span className="value-wrapper-inner">$10,000</span>
                                        </div>

                                    </div>
                                </Col>
                            </Row>
                        </div>                    
                        {/* <div className="section quick-look-tables"> */}
                        <Row>
                            <Col xl={6}>
                                <div className="section">
                                    <div className="section-title">Recent Posts</div>
                                    
                                    <QuickLookTableRecentActivity />
                                </div>
                            </Col>
                            <Col xl={6}>
                                <div className="section">
                                    <div className="section-title">Active Campaigns</div>
                                    <QuickLookTableActiveCampaigns />
                                    
                                </div>                                
                            </Col>
                        </Row>
                        {/* </div> */}
                        <div className="section">
                            <div className="influencer-suggestions-wrapper">
                            </div>
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