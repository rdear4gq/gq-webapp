import React, { Component } from 'react';

import QuickLookTableRow from "../home/quick-look-table-row.jsx";

class QuickLookTableRecentActivity extends Component {
	
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
					{this.state.data.map(() => {

						

					})}
	            </div>
			</div>			
		);
	}
}
 
export default QuickLookTableRecentActivity;