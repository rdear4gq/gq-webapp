import React, { Component } from 'react';

import "../../style/dashboard-home.css";

class QuickLookTableRow extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			selected: false,
			isHeader: false,
			col1: (props.col1 === undefined) ? "col1" : this.props.col1,
			col2: (props.col2 === undefined) ? "col2" : this.props.col2,
			col3: (props.col3 === undefined) ? "col3" : this.props.col3
		}
	}

	componentWillMount = () => {

	}

	render() { 
		return (
			<div className={(this.props.isHeader) ? "qlt-row header" : "qlt-row"}>
				<div className="cell">{this.state.col1}</div>
                <div className="cell">{this.state.col2}</div>
                <div className="cell">{this.state.col3}</div>
			</div>
		);
	}
}
 
export default QuickLookTableRow;