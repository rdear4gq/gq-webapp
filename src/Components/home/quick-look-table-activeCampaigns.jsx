import React, { Component } from 'react';

import QuickLookTableRow from "../home/quick-look-table-row.jsx";

class QuickLookTableActiveCampaigns extends Component {
	
	constructor(props) {

		super(props);

		this.state = {
			
			activeCampaigns: this.props.activeCampaigns

		}
	}

	componentWillMount() {

		console.log("QuickLook-ActiveCampaigns Table");
		console.log("Will Mount");
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log("QuickLook-ActiveCampaigns Table");
	// 	console.log("Should Update");
		
	// 	const activeCampaigns = nextProps.activeCampaigns;
		
	// 	this.setState({ activeCampaigns });

	// 	return true;
	// }

	render() { 

		console.log("QuickLook-Active Campaigns Table")
		console.log(this.state.activeCampaigns);
		return (
			<div className="quick-look-table">
	            <QuickLookTableRow col1={"Campaign Name"} col2={"Reach"} col3={"Cost"} isHeader={true}/>
	                
	            <div className="content">

					{this.props.activeCampaigns.map((obj, i) => {
						return <QuickLookTableRow key={i} col1={obj.name} col2={'120K'} col3={obj.estimatedSpend} />
					})}
	                
	            </div>
			</div>			
		);
	}
}
 
export default QuickLookTableActiveCampaigns;