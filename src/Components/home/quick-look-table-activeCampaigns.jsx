import React, { Component } from 'react';

import QuickLookTableRow from "../home/quick-look-table-row.jsx";

class QuickLookTableActiveCampaigns extends Component {
	
	constructor(props) {

		super(props);

		this.state = {
			data: []
		}
	}

	render() { 
		return (
			<div className="quick-look-table">
	            <QuickLookTableRow col1={"test"} col2={"test2"} col3={"test3"} isHeader={true}/>
	                
	            <div className="content">
	                
	            </div>
			</div>			
		);
	}
}
 
export default QuickLookTableActiveCampaigns;