import React, { Component } from 'react';
import DashboardHeader from '../Components/dashboardHeader.js';
import DashboardNav from '../Components/dashboard-Nav.js';

import DashboardHome from "../Components/dashboard-home.js";
import DashboardCampaigns from "../Components/dashboard-campaigns.js";

import '../style/App.css';
import '../style/mainDashboard.css';

class MainDashboard extends Component {
    
    constructor(props) {

        super(props)

        this.state = {

            activePanel: 0

        }

    }

    componentWillMount() {
 
    }
  
    componentWillUpdate() {
      
    }

    updateActivePanel = (btnID) => {

        this.setState((state, props) => {

            return {activePanel: btnID}

        });

    }

    render() { 



        return (
            <div className="primary-container">
                <div className="mainDashboard">
                    <DashboardHeader globalState={this.props.globalState} />
                    <div className="dashboardContent">
                        <DashboardNav navUpdate={this.updateActivePanel} />
                        <div>
                            <DashboardHome active={this.state.activePanel === 0} globalState={this.props.globalState} />
                            <DashboardCampaigns active={this.state.activePanel === 1} globalState={this.props.globalState} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default MainDashboard;