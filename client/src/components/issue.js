import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/action';
import '../imports/materialize-css/dist/css/materialize.css';


let btnRef;
export class Issue extends React.Component {
    constructor(props) {
        super(props)
    };
    disableButton() {
		 btnRef.setAttribute('disabled', 'disabled')
	 }

	 enableButton() {
		 btnRef.removeAttribute('disabled');
	 }

     onHandleClick(userInput) {
         this.props.toggleTimeRunning();
         this.props.toggleIssueSelected;
     }

    render() {
        return (

                <div className="col s12 ">
                    <div className="card blue-grey darken-1 hoverable">
                       <div className="card-content white-text">
                         <span className="card-title">{this.props.title}</span>
                         <p>{this.props.body}</p>
                         <a href={this.props.url} target="_blank">Github</a>
                       </div>
                       <div className="card-action">
                        <button className="waves-effect waves-light btn" onClick={this.onHandleClick} ref={ref => btnRef = ref}>Pom This Issue</button>
                       </div>
                    </div>
                </div>

        )
    }
};

const mapStateToProps = (state, props) => ({
    userInput:state.List.userSelected,
    issueSelected: state.List.issueSelected
})

const mapDispatchToProps = (dispatch) => ({
	toggleTimeRunning() {
		dispatch(actions.toggleTime())
	},
    toggleIssueSelected() {
        dispatch(actions.toggleIssueSelected())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Issue);
