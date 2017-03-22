import * as actions from '../actions/action';

const initalState = {
    isTimeRunning: false,
    time: 1
};


const clockReducer = (state=initalState, action) => {
    switch(action.type) {
        case actions.TOGGLE_TIME:
            return {...state, isTimeRunning: !state.isTimeRunning};
        case actions.RESET_CLOCK:
            console.log(state)
            return ({time: 20, isTimeRunning: true});
        default:
            return state;
    }
}

export default clockReducer;