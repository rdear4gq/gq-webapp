import React, { Component } from 'react';

import "../style/dashboardCampaigns.css";

class DBCampaignsTableRow extends Component {
    
    // constructor(props) {
    //     super(props);

    // }

    convertStatus(statusInt) {

        let stringStatus = "";

        switch(statusInt) {
            case 0:
                stringStatus = "Pending";
                break;
            case 1:
                stringStatus = "In Progress";
                break;
            case 2:
                stringStatus = "Paused"
                break;
            case 3:
                stringStatus = "Completed"
                break;
            default:
                stringStatus =  "Unknown"
                break;
            
        }

        return stringStatus;
    }

    rowClicked = () => {
        
        this.props.rowClicked(this.props.campaign._id);
    }

    componentWillMount() {
        // console.log
    }

    render() { 
        return (
            <div className="row" onClick={this.rowClicked}>
                <div className="cell noselect">{this.props.campaign.name}</div>
                <div className="cell noselect">3000</div>
                <div className="cell noselect">IG</div>
                <div className="cell noselect">{this.props.campaign.startDate === null ? "-" : this.props.campaign.startDate}</div>
                <div className="cell noselect">{this.props.campaign.endDate === null ? "-" : this.props.campaign.endDate}</div>
                <div className="cell noselect">{this.props.campaign.spend}</div>
                <div className="cell noselect">{this.convertStatus(this.props.status)}</div>
            </div>
        );
    }
}
 
export default DBCampaignsTableRow;