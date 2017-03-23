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
            console.log('reducer hit');
            return ({seconds: 20, isTimeRunning: false});
        default:
            return state;
    }
}

export default clockReducer;