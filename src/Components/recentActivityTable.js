import React, { Component } from 'react';

import "../style/ui-components/tables.css";

class RecentActivityTable extends Component {
    state = {  }
    render() { 
        return (
            <div className="table-small">
                <div className="title">{this.props.title}</div>
                <div className="header row">
                    <div className="cell">Date</div>
                    <div className="cell">Subject</div>
                    <div className="cell">Description</div>
                </div>
                <div className="data">
                </div>
            </div>
        );
    }
}
 
export default RecentActivityTable;