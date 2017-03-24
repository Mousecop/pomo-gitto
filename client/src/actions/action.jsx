export const CLOCK_END = 'CLOCK_END';
export const CLOCK_START = 'CLOCK_START';
export const FETCH_ISSUE_LIST_SUCCESS = 'FETCH_ISSUE_LIST_SUCCESS';
export const FETCH_ISSUE_LIST_ERROR = 'FETCH_ISSUE_LIST_ERROR';
export const SELECT_ISSUE = 'SELECT_ISSUE';
export const DISABLE_ISSUE = 'DISABLE_ISSUE';
export const POMMO_HISTORY = 'POMMO_HISTORY';
export const TOGGLE_TIME = 'TOGGLE_TIME';
import Cookie from 'react-cookie';

//make fetch request for github API
export const fetchIssueList = () => dispatch => {
    const url = 'https://api.github.com/issues';
    fetch(url,{
        headers: {Authorization: 'token ' + Cookie.load('token')}
    }).then(response => {
       if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
    .then(items => {
        return dispatch(fetchIssueListSuccess(items));
    })
}

export const gitLogin = () => {
    const url = 'http://localhost:8080/api/auth/github';
    fetch(url)
        .then(response => {
            return response.json();
        })
}

export const toggleTime = () => ({
    type: TOGGLE_TIME
})

export const fetchIssueListSuccess = (lists) => ({
    type: FETCH_ISSUE_LIST_SUCCESS,
    lists
})

export const fetchIssueListError = (error) => ({
    type: FETCH_ISSUE_LIST_ERROR,
    error
})

export const selectedIssue = (userInput) => ({
    type: SELECT_ISSUE,
    userInput
})

export const disableIssue = () => ({
    type: DISABLE_ISSUE
})

export const pommoHistory = () => ({
    type: POMMO_HISTORY
})
