import React from 'react';
import { connect } from 'react-redux';

import ReactCountdownClock from 'react-countdown-clock';
import { toggleTime } from '../actions/action';

export function Clock (props) {
	return (
        <div className="App">
            <h1>PomoGitto</h1>
			<button type="button" onClick={props.toggleTimeRunning}>Start</button>
			<div className="clock">
				<ReactCountdownClock seconds={1500}
				size={400}
				weight={10}
				paused={!props.isTimeRunning}/>
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



