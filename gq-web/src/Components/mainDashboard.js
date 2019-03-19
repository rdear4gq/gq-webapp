import React, { Component } from 'react';
import DashboardHeader from '../Components/dashboardHeader.js';
import NavDashboard from '../Components/navDashboard.js';

import '../style/App.css';
import '../style/mainDashboard.css';

class MainDashboard extends Component {
    
    render() { 
        return (
            <div className="primary-container">
                <div className="mainDashboard">
                    <DashboardHeader globalState={this.props.globalState}/>
                    <div className="body">
                        <NavDashboard />
                        <div></div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default MainDashboard;