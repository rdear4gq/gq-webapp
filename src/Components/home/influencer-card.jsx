import React, { Component } from 'react';

import "../home/style/influencer-card.css";

import { Button } from 'react-bootstrap';

class InfluencerCard extends Component {
	
	constructor(props) {

		super(props);

		this.state = {
			flipped: props.flipped
		}
	}

	cardSelected = () => {
		console.log("A card was selected");

		let flipped = !this.state.flipped;

		this.setState({ flipped });
	}

	influencerSelected = (e) => {
		e.stopPropagation();
		console.log("I want this influencer!");

	}

	render() { 
		return (
			<div className="influencer-card-wrapper-outer" onClick={this.cardSelected}>
				{(this.state.flipped === false) ? (
					<div className="influencer-card-front-wrapper-inner">
					
						<div className="img"></div>
					
					
						<div className="name">Ron Dear</div>

						<div className="reach">
							<span className="label">Reach: </span>
							<span className="value">57K</span>
						</div>

						<div className="cpe">
							<span className="label">Average CPE:</span>
							<span className="value">$400</span>
						</div>
						
					</div>
				) : (
					<div className="influencer-card-rear-wrapper-inner">
						<div className="info-wrapper">
							<div className="name">Ron Dear</div>
							<div className="stats">
								<div className="img"></div>
								<div className="stat">
									<div className="label">5441</div>
									<div className="value">posts</div>
								</div>
								<div className="stat">
									<div className="label">30M</div>
									<div className="value">followers</div>
								</div>
								<div className="stat">
									<div className="label">204</div>
									<div className="value">following</div>
								</div>
							</div>
							<div className="description">
								He is best known for his "Deep Thoughts by Jack Handy", a giant body of surrealist one-liner jokes.
							</div>
							<div className="content-tags-container">
								<div className="content-tag">
									<div className="icon"></div>
									<div className="label">Talent</div>
								</div>
								<div className="content-tag">
									<div className="icon"></div>
									<div className="label">Travel</div>
								</div>
								<div className="content-tag">
									<div className="icon"></div>
									<div className="label">Fashion</div>
								</div>
								<div className="content-tag">
									<div className="icon"></div>
									<div className="label">Photography</div>
								</div>
							</div>
						</div>
						<div className="button-wrapper">
							<Button variant="primary" onClick={this.influencerSelected}>Select Influencer</Button>
						</div>
					</div>
				)}
				

			</div>
		);
	}
}
 
export default InfluencerCard;