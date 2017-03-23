import * as actions from '../actions/action';

const initalState = {
    isTimeRunning: false,
    seconds: 10
};


const clockReducer = (state=initalState, action) => {
    switch(action.type) {
        case actions.TOGGLE_TIME:
            return {...state, isTimeRunning: !state.isTimeRunning};
        case actions.RESET_CLOCK:
            return ({time: state.seconds, isTimeRunning: false});
        default:
            return state;
    }
}

export default clockReducer;