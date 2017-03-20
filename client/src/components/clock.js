import React from 'react';

import ReactCountdownClock from 'react-countdown-clock';

export default function Clock (props) {
	// let pause = true;
	// function togglePause() {
	// 	pause ? pause = false : pause=true;
	// 	console.log(pause);
	// }
	return (
        <div className="App">
            <h1>PomoGitto</h1>
			<button type="button" onClick={props.onClick}>Start</button>
			<div className="clock">
				<ReactCountdownClock seconds={1500}
				size={400}
				weight={10}
				paused={props.paused}
				onClick={props.onClick}/>
			</div>
			
        </div>
    );
}
