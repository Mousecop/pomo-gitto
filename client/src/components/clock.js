import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/action'

import ReactCountdownClock from 'react-countdown-clock';

export function Clock (props) {
	// let pause = true;
	// function togglePause() {
	// 	pause ? pause = false : pause=true;
	// 	console.log(pause);
	// }
	return (
        <div className="App">
            <h1>PomoGitto</h1>
			<div className="clock">
				<ReactCountdownClock seconds={1500}
				size={400}
				weight={10}
				paused={props.paused}
				onClick={props.onClick}
			    onComplete={() => props.dispatch(actions.pommoHistory())}/>
			</div>

        </div>
    );
}
export default connect ()(Clock);
