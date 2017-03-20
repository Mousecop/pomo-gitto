import React from 'react';

import ReactCountdownClock from 'react-countdown-clock';

export default function Clock () {
	return (
        <div>
            <h1>this should show a clock</h1>
            <ReactCountdownClock seconds={60}
                                 paused={false}
                         />
        </div>
    );
}
