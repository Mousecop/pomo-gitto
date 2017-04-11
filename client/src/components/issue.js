import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/action';
import '../imports/materialize-css/dist/css/materialize.css';
import imageArray from '../imports/images/images';


export class Issue extends React.Component {
    constructor(props) {
        super(props)
    };

     onHandleClick() {
         this.props.toggleTimeRunning();
         this.props.toggleIssueSelected;
     }

    render() {
        //This renders the icons based on which Issue was selected.
        let poms = this.props.pomHistory.filter(pom => {
            return pom === this.props.title;
        });
        let icons;
            icons = poms.map((pom, i) => {
                return  <img className="tomato-icon" src={imageArray[0]} alt=""></img>
            });
        return (
                <div className="card blue-grey darken-1 hoverable">
                   <div className="card-content white-text">
                     <span className="card-title">{this.props.title}</span>
                     <p>{this.props.body}</p>
                     <a href={this.props.url} target="_blank">Github</a>
                   </div>
                   <div className="card-action">
                    <div className="completed">
                        {icons}
                    </div>
                    <button className="waves-effect waves-light btn" onClick={() => {this.props.selectIssue(this.props.title); this.props.toggleIssueSelected()}}>Pom       This Issue
                    </button>
                   </div>
                </div>
        )
    }
};

const mapStateToProps = (state, props) => ({
    pomHistory: state.List.pommoHistory,
    issueIsSelected: state.List.issueSelected,
    userSelected: state.List.userSelected
});

const mapDispatchToProps = (dispatch) => ({
	toggleTimeRunning() {
		dispatch(actions.toggleTime())
	},
    selectIssue(title) {
        dispatch(actions.selectedIssue(title))
    },
    toggleIssueSelected() {
        dispatch(actions.toggleIssueSelected());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Issue);
