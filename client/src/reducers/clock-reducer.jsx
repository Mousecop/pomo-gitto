//Even though there is only one piece of state, I wanted to practice having two states
import * as actions from '../actions/action';

const initalState = {
    isTimeRunning: false,
};

const clockReducer = (state=initalState, action) => {
    switch(action.type) {
        case actions.TOGGLE_TIME:
            return ({isTimeRunning: !state.isTimeRunning});
        default:
            return state;
    }
}

export default clockReducer;