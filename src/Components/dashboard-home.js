import React, { Component } from 'react';

import ActiveCampaignsTable from "../Components/activeCampaignsTable.js";
import RecentActivityTable from "../Components/recentActivityTable.js";

import "../style/dashboard-contentPanel.css";
import "../style/dashboardHome.css";

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
            //Fetct Account Info
            //Fetch Recent Influencer Posts
            //Fetch Campaigns List
            //Fetch Recommended Influencers

    }

    componentDidMount() {

    }

    render() { 
        return (
            <div style={{"display": (this.props.active) ? "" : "none"}} className="dashboard contentPanel">
                <div className="companyInfo">
                    
                    <div className="photo"></div>
                    <div className="name">{this.props.globalState.organization.name}</div>
                    
                    
                </div>
                <div className="twoPaneSection">
                    <div id="recentActivityTable">
                        <RecentActivityTable title="Recent Activity" globalState={this.props.globalState} />
                    </div>
                    <div id="activeCampaignsTable">
                        <ActiveCampaignsTable title="Active Campaigns" globalState={this.props.globalState} />
                    </div>
                </div>
                <div className="suggestedInfluencers"></div>
            </div>
        );
    }
}
 
export default DashboardHome;