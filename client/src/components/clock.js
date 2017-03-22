import React from 'react';
import { connect } from 'react-redux';
import ReactCountdownClock from 'react-countdown-clock';
import { toggleTime } from '../actions/action';

import '../clock.css';

export class Clock extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			time: 1500
		}
	}
	render(){
		return (
			<div className="clockContainer">
				<div className="clock">
					<ReactCountdownClock seconds={this.state.time}
					color={'#7986cb'}
					size={375}
					weight={15}
					paused={!this.props.isTimeRunning}
					pausedText={'Click Start'}
					/>
				</div>
			</div>
    	);
	}
}


const mapStateToProps = (state, props) => ({
	isTimeRunning: state.Clock.isTimeRunning
});

const mapDispatchToProps = (dispatch) => ({
	toggleTimeRunning() {
		dispatch(toggleTime())
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Clock);
