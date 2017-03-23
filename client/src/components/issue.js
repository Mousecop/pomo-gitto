import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/action';
import '../imports/materialize-css/dist/css/materialize.css';


let btnRef;
export class Issue extends React.Component {
    constructor(props) {
        super(props)
    };

     onHandleClick(userInput) {
         this.props.toggleTimeRunning();
         this.props.toggleIssueSelected;
     }

    render() {
        let poms = this.props.pomHistory;
        let icons;
        if (poms.length > 0) {
            icons = poms.map((pom, i) => {
                return   <i key={i} className="material-icons">done</i>
            })
        }

        return (
                <div className="card blue-grey darken-1 hoverable">
                   <div className="card-content white-text">
                     <span className="card-title">{this.props.title}</span>
                     <p>{this.props.body}</p>
                     <a href={this.props.url} target="_blank">Github</a>
                   </div>
                   <div className="card-action">
                    <button className="waves-effect waves-light btn" onClick={() => this.props.selectIssue(this.props.title)}>Pom This Issue</button>
                        {icons}
                   </div>
                </div>
        )
    }
};

const mapStateToProps = (state, props) => ({
    pomHistory: state.List.pommoHistory
});

const mapDispatchToProps = (dispatch) => ({
	toggleTimeRunning() {
		dispatch(actions.toggleTime())
	},
    selectIssue(title) {
        dispatch(actions.selectedIssue(title))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Issue);