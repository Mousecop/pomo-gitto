import * as actions from '../actions/action';

const initalState = {
    timeEnded: false,
    clockStarted: false
}


const clockReducer = (state=initalState, action) => {
    switch(action.type) {
        case actions.CLOCK_END: 
            return {...state, timeEnded: true};
        case actions.CLOCK_START: 
            return {...state, clockStarted: true};
        default:
            return state;
    }
}

export default clockReducer;