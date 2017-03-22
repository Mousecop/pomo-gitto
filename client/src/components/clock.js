import React from 'react';
import * as actions from '../actions/action'
import { connect } from 'react-redux';

import ReactCountdownClock from 'react-countdown-clock';
import { toggleTime } from '../actions/action';

import '../clock.css';

export const Clock = (props) => {
	return (
        <div className="clockContainer">
			<div className="clock">
				<ReactCountdownClock seconds={1500}
				size={375}
				weight={10}
				paused={!props.isTimeRunning}
				pausedText={'Click Start'}
				/>
			</div>
        </div>
    );
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
