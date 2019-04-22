import React, { Component } from 'react';

import "../style/ui-components/tables.css";
import "../style/activeCampaignsTable.css";

class ActiveCampaignsTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            campaigns: []
        }
    }

    componentWillMount() {
        // console.log("Component did moount.");
        // console.log("Getting active campaigns...");
        // console.log(this.props.globalState);
        // console.log("http://wraughn.com:4003/api/campaigns/organization/" + this.props.globalState.organization._id);
        fetch(`http://wraughn.com:4003/api/campaigns/organization?id=${this.props.globalState.organization._id}&active=1`)
        .then(res => {
            return res.json();
        })
        .then(json => {
            // console.log(json);
            this.setState({campaigns: json})

        })
        .catch(error => console.log(error));
    }

    componentDidMount() {
        
    }

    componentWillUpdate() {
        console.log("Component will update");
    }

    render() { 
        return (
            <div className="table-small">
                <div className="title">{this.props.title}</div>
                <div className="header row">
                    <div className="cell">Name</div>
                    <div className="cell">Reach</div>
                    <div className="cell">Spend</div>
                </div>
                <div className="data">
                    {this.state.campaigns.map((obj, i) => {
                        return <div className="row" key={i}>
                            <div className="cell">{obj.name}</div>
                            <div className="cell">NULL</div>
                            <div className="cell">{obj.estimatedSpend}</div>
                        </div>
                    })}
                </div>
            </div>
        );
    }
}
 
export default ActiveCampaignsTable;