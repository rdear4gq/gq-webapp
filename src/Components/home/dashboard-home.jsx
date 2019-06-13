import React, { Component } from 'react';



// import ActiveCampaignsTable from "../Components/activeCampaignsTable.js";
// import RecentActivityTable from "../Components/recentActivityTable.js";

import "../../style/dashboard-pane.css";
import "../home/style/dashboard-home.css";

import { Container, Col, Row } from 'react-bootstrap';

import QuickLookTableActiveCampaigns from "../home/quick-look-table-activeCampaigns.jsx";
import QuickLookTableRecentActivity from "../home/quick-look-table-recentActivity.jsx";
import InfluencerCard from "../home/influencer-card.jsx";

class DashboardHome extends Component {
    constructor(props) {
        super(props);

        this.state = {

            activeCampaigns: []

        }
    }

    componentWillMount() {

        fetch(`http://wraughn.com:4003/api/campaigns/organization?id=${this.props.globalState.organization._id}&active=1`)
        .then(res => {
            return res.json();
        })
        .then(json => {
            console.log(json);
            let activeCampaigns = json;

            this.setState({ activeCampaigns });
            

        })
        .catch(error => console.log(error));
            

    }

    componentDidMount() {

    }

    render() {

        console.log(this.props.globalState);

        return (
            
            <div className="content-pane db-home-wrapper">
                
                <Container fluid={true} className="content-area">
                    <div className="section org-info">
                        <Row>
                            <Col xl="auto" className="org-img-wrapper-outer">
                                
                                <div className="org-img-wrapper-inner">
                                </div>
                                
                            </Col>
                            <Col className="org-name-wrapper-outer">
                                <div className="org-name-wrapper-inner">
                                    Ron's Cool Company
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
                                <div className="section-title-wrapper">
                                    <div className="title">Recent Activity</div>
                                </div>
                                
                                <QuickLookTableRecentActivity />
                            </div>
                        </Col>
                        <Col xl={6}>
                            <div className="section">
                                <div className="section-title-wrapper">
                                    <div className="title">Active Campaigns</div>
                                </div>
                                <QuickLookTableActiveCampaigns activeCampaigns={this.state.activeCampaigns} />
                                
                            </div>                                
                        </Col>
                    </Row>
                    {/* </div> */}
                    <div className="section">
                        <div className="section-title-wrapper">
                            <div className="title">Recommended Influencers</div> 
                        </div>
                        <div className="influencer-suggestions-wrapper-outer">
                            <div className="influencer-suggestions-wrapper-inner">
                                <InfluencerCard flipped={false}/>
                                <InfluencerCard flipped={true} />
                                <InfluencerCard flipped={false} />
                                <InfluencerCard flipped={false} />
                            </div>                                
                        </div>
                    </div>
                </Container>
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