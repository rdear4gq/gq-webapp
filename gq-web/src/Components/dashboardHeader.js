import React, { Component } from 'react';

import '../style/dashboardHeader.css';

class DashboardHeader extends Component {
    
    render() { 
        return (
            <div className="dashboardHeader-Container">
                <div className="logoContaier">GROWTH QUO</div>
                <div>Support</div>
                <div>Logout</div>
                <div>BELL</div>
            </div>
        );
    }
}
 
export default DashboardHeader;