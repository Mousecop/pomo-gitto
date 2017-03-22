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
        let hidden;
        const issues = this.props.issues.map((issue, i) => {
            return <div className="issue-box card" key={i}>
                        <input name="selected-issue" type="radio" value={issue.id} onClick={() => this.props.selectIssue(issue)}/>
                        Issue Title: {issue.title}
                        <p>Repo: {issue.repository.full_name}</p>
                        <a href={issue.html_url} target="_blank">Issue on Github</a>
                        <button className={`button ${hidden = this.props.selected.title === issue.title ? '' : 'hidde'}`}type="button" onClick={this.props.toggleTimeRunning}>Start The Clock</button>
                    </div>
        })

        const cardIssues = this.props.issues.map((issue, i) => {
            return <Issue title={issue.title} body={issue.body} url={issue.html_url}/>
        })
        return (
            <div>

                <div className="container">
                    <div className="row">
                        {cardIssues}
                    </div>
                </div>
                <h3>These issues aren't going to resolve themselves</h3>
                <p>Choose one and get to work!</p>
                {issues}
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
