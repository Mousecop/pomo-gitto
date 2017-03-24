import * as actions from '../actions/action';


const initialState = {
    issueSelected: false,
    issues: [],
    disabled: true,
    userSelected: '',
    pommoHistory: [],
    loggedIn: false
};


const listReducer = (state=initialState, action) => {
    switch(action.type) {
        case actions.SELECT_ISSUE:
            return{...state, issueSelected: true, disabled: false, userSelected: action.userInput}
        case actions.DISABLE_ISSUE:
            return {...state, disabled: !state.disabled};
        case actions.FETCH_ISSUE_LIST_SUCCESS:
            return {...state, issues: action.lists, loggedIn: true}
        case actions.POMMO_HISTORY:
            return {...state, pommoHistory: [...state.pommoHistory, state.userSelected]}
        case actions.LOGOUT:
            return {...initialState}
        default:
            return state;
    }
}

export default listReducer;
