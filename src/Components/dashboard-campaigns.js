import React, { Component } from 'react';
import "../style/dashboard-contentPanel.css";

class DashboardCampaigns extends Component {
    state = {  }
    render() { 
        return (
            <div style={{"display": (this.props.active) ? "" : "none"}} className="contentPanel">
                <span>Campaigns</span>
            </div>
        );
    }
}
 
export default DashboardCampaigns;