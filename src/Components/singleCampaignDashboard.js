import React, { Component } from 'react';

import "../style/singleCampaignDashboard.css"

class SingleCampaignDashboard extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            campaignId: this.props.campaignId,
            campaignData: {},
            editingName: false
        }
    }

    componentDidMount() {
        console.log("Component Did Mount");

        
        let reqURL = `http://wraughn.com:4003/api/campaigns/${this.state.campaignId}`;

        let reqProperties = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.props.globalState.authToken}`
            }
        }
        // console.log(this.props.globalState.authToken);

        // console.log(reqURL);

        fetch(reqURL, reqProperties)
        .then(res => res.json())
        .then(json => {
            this.setState((state, props) => {

                return {campaignData: json}

            })
        })
        .catch(err => console.log(err));

    }

    handleNameEditing = (e) => {

        let campaignInfo = this.state.campaignData;

        campaignInfo.name = e.target.value;

        this.setState((state, props) => {

            return campaignInfo;

        });

    }

    nameBlur = (e, el) => {

        this.setState((state, props) => {

            return {editingName: false}

        });

        this.updateCampaignRequest();

    }

    updateCampaignRequest = () => {

        console.log("Updating Campaign");
        console.log(this.state);

        let url = `http://wraughn.com:4003/api/campaigns/${this.state.campaignData._id}`;
        console.log(url);
        let reqParameters = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.props.globalState.authToken}`
            },
            body: JSON.stringify({campaign: this.state.campaignData})
        }

        console.log(this.state.campaignData);

        fetch(url, reqParameters)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));

        //TO DO:
            //Update the server with the new name

    }

    editCampaignName = () => {
        
        this.setState((state, props) => {

            return {editingName: true}

        });

    }

    render() { 
        // console.log(this.state.campaignData);
        return (
            <div className="singleCampaignPane">
                <div className="firstRow">
                    <div className="section1">
                        <div className="top">
                            {(this.state.editingName) ? <input className="campaignName" onChange={this.handleNameEditing} onBlur={this.nameBlur} defaultValue={this.state.campaignData.name} /> : <div className="campaignName">{this.state.campaignData.name}</div>}
                            <div className="campaignNameEditButton" onClick={this.editCampaignName}>P</div>
                        </div>
                        <div className="bottom">

                        </div>
                    </div>
                    <div className="section2">
                        <div className="top">
                            <div className="title">Budget</div>
                            <div className="key">
                                <div className="keyEntry">
                                    <div className="indicator" style={{backgroundColor: "green"}}></div>
                                    <div className="label">Money you have</div>
                                </div>
                                <div className="keyEntry">
                                    <div className="indicator" style={{backgroundColor: "yellow"}}></div>
                                    <div className="label">Money you spent</div>
                                </div>
                                <div className="keyEntry">
                                    <div className="indicator" style={{backgroundColor: "blue"}}></div>
                                    <div className="label">Total Spend</div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom"></div>
                    </div>
                    <div className="section3">
                        
                    </div>
                </div>
                <div className="secondRow"></div>
                <div className="thirdRow"></div>
            </div>
        );
    }
}
 
export default SingleCampaignDashboard;