import React from 'react';
import { connect } from 'react-redux';
import ReactCountdownClock from 'react-countdown-clock';
import { toggleTime, resetClock } from '../actions/action';
import '../imports/materialize-css/dist/css/materialize.css';
import '../clock.css';

export const Clock = (props) => {
		return (
			<div className="col s12 m4">
				<button onClick={props.toggleTimeRunning}>Reset</button>
				<div className="clock">
					<ReactCountdownClock seconds={props.time}
					fontSize={'30px'}
					color={'#7986cb'}
					size={375}
					weight={15}
					paused={!props.isTimeRunning}
					pausedText={'Click to Start'}
					onComplete={props.resetClock}
					/>
				</div>
			</div>
    	);
	}


const mapStateToProps = (state, props) => ({
	isTimeRunning: state.Clock.isTimeRunning,
	time: state.Clock.time
});

const mapDispatchToProps = (dispatch) => ({
	toggleTimeRunning() {
		dispatch(toggleTime())
	},
	resetClock() {
		dispatch(resetClock())
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Clock);
