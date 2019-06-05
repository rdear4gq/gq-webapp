import React, { Component } from 'react';

import { Container, Col, Row } from 'react-bootstrap';

// import CampaignsTableRow from "../Components/db-campaigns-tableRow.js";
// import ButtonStd from "../Components/btn-std.js";
// import SingleCampaignDashboard from "../Components/singleCampaignDashboard.js";

import "../style/dashboard-pane.css";
import "../style/dashboard-campaigns.css";



class DashboardCampaigns extends Component {
    
    //The campaigns will be in props.campaigns

    constructor(props) {

        super(props)

        this.state = {
            campaigns: [],
            displayingSingleCampaign: false,
            selectedCampaign: ""
        }
    }

    componentWillMount() {

        // // console.log("Getting the campaigns");
        // fetch(`http://wraughn.com:4003/api/campaigns/organization?id=${this.props.globalState.organization._id}&active=0`)
        // .then( res => res.json() )
        // .then( json => {

        //     let campaigns = {...json};
        //     // this.setState({ campaigns });
        //     this.setState((state, props) => {
        //         return ({campaigns: json});
        //     });

        // })
        // .catch( err => console.log(err) );

    }

    componentWillUpdate() {
        // console.log("Updating Component");
        // console.log("DB-Campaigns", this.state.campaigns);
    }

    campaignSelected = (id) => {
        // console.log(id);
        // this.setState((state, props) => {

        //     return {
        //         displayingSingleCampaign: true,
        //         selectedCampaign: id
        //     }

        // });

    }

    newCampaign = () => {

        console.log("Starting a new campaign...");
        
    }

    render() { 
        // console.log(this.state);
        return (
            <div className="contentPane db-campaigns-wrapper">
                <div className="content-area">
                    <Row>
                        <Col xl={12}>
                            <div className="section newCampaignButtonWrapper">
                            </div>
                        </Col>
                    </Row>
                    <Row>
                    </Row>
                    <Row>
                        <Col xl={12}>
                            <div className="section campaigns-table-wrapper">
                            </div>
                        </Col>
                    </Row>
                </div>                                
            </div>
        )
        // return (
        //     <div style={{"display": (this.props.active) ? "" : "none"}} className="contentPanel campaigns">
        //         {(this.state.displayingSingleCampaign) ? <SingleCampaignDashboard globalState={this.props.globalState} campaignId={this.state.selectedCampaign} /> : null}
        //         <div className="topButtonContainer">
        //             <ButtonStd text="New Campaign" status="active" clickFn={this.newCampaign}/>
        //         </div>
        //         <div className="campaigns-table">
        //             <div className="header row">
        //                 <div className="cell">Campaign</div>
        //                 <div className="cell">Reach</div>
        //                 <div className="cell">Platform</div>
        //                 <div className="cell">Start Date</div>
        //                 <div className="cell">End Date</div>
        //                 <div className="cell">Spend</div>
        //                 <div className="cell">Status</div>
        //             </div>
        //             <div className="table-data">
        //                 {this.state.campaigns.map((obj, i) => {
        //                     return <CampaignsTableRow key={i} campaign={obj} rowClicked={this.campaignSelected} />
        //                 })}
        //             </div>
        //         </div>
        //     </div>
        // );
    }
}
 
export default DashboardCampaigns;