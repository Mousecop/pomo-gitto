import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/action';
import '../list.css';
import '../imports/materialize-css/dist/css/materialize.css';
import Issue from './issue';
export class IssueList extends React.Component {
    constructor(props) {
        super(props)
    };
    componentDidMount() {
        this.props.fetchIssues();
    }

    render() {

        const cardIssues = this.props.issues.map((issue, i) => {
            return <Issue key={i} title={issue.title} body={issue.body} url={issue.html_url}/>
        })
        return (
                <div className="col s12 m7">
                    {cardIssues}
                </div>
        )
    }

}

const mapStateToProps = (state, props) => ({
    issues: state.List.issues,
    selected: state.List.userSelected
});
const mapDispatchToProps = (dispatch) => ({
	toggleTimeRunning() {
		dispatch(actions.toggleTime())
	},
    selectIssue(issue) {
        dispatch(actions.selectedIssue(issue));
    },
    fetchIssues() {
        dispatch(actions.fetchIssueList());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(IssueList);
