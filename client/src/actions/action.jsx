export const CLOCK_END = 'CLOCK_END';
export const CLOCK_START = 'CLOCK_START';
export const FETCH_ISSUE_LIST_SUCCESS = 'FETCH_ISSUE_LIST_SUCCESS';
export const FETCH_ISSUE_LIST_ERROR = 'FETCH_ISSUE_LIST_ERROR';
export const SELECT_ISSUE = 'SELECT_ISSUE';
export const DISABLE_ISSUE = 'DISABLE_ISSUE';

//make fetch request for github API
export const fetchIssueList = () => dispatch => {
    const url = 'https://api.github.com/user?access_token=61c7b4748bd13b8bd98130cc58e2cfeac83c08c4';
    fetch(url).then(response => {
       if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
    .then(items => {
        console.log(items);
    })
}




export const clockEnd = () => {
    type: CLOCK_END
}

export const clockStart = () => {
    type: CLOCK_START
}

export const fetchIssueListSuccess = (lists) => {
    type: FETCH_ISSUE_LIST_SUCCESS,
    lists
}

export const fetchIssueListError = (error) => {
    type: FETCH_ISSUE_LIST_ERROR,
    error
}

export const selectedIssue = (userInput) => {
    type: SELECT_ISSUE,
    userInput
}

export const disableIssue = () => {
    type: DISABLE_ISSUE
}