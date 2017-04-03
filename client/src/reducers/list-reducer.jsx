import * as actions from '../actions/action';


const initialState = {
    issueSelected: false,
    issues: [],
    disabled: true,
    userSelected: '', //we fill in the empty string with the issue title that is selected
    pommoHistory: [], //array of all the pom's user has selected / worked on
    loggedIn: false
};


const listReducer = (state=initialState, action) => {
    switch(action.type) {
        case actions.SELECT_ISSUE:
            return{...state, disabled: false, userSelected: action.userInput}
        case actions.TOGGLE_ISSUE_SELECTED:
            return {...state, issueSelected: !state.issueSelected}
        case actions.DISABLE_ISSUE:
            return {...state, disabled: !state.disabled};
        case actions.FETCH_ISSUE_LIST_SUCCESS:
            return {...state, issues: action.lists, loggedIn: true}
        case actions.POMMO_HISTORY:
            return {...state, pommoHistory: [...state.pommoHistory, state.userSelected]}
        case actions.LOGOUT:
            return {...initialState}
        case actions.CLEAR_USER_SELECTED:
            return {...state, userSelected: ''}

        default:
            return state;
    }
}

export default listReducer;
