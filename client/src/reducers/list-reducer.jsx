import * as actions from './actions/action';


const initalState = {
    issueSelected: false,
    issues: [],
    disabled: true,
    userSelected: ''
}


const listReducer = (state=initalState, action) => {
    switch(action.type) {
        case actions.SELECT_ISSUE:
            return{...state, issueSelected: true, disabled: false, userSelected: action.userInput}
        case actions.DISABLE_ISSUE:
            return {...state, disabled: !state.disabled};
        case actions.FETCH_ISSUE_LIST_SUCCESS:
            return {...state, issues: action.lists}
        default:
            return state;
    }
}

export default listReducer;