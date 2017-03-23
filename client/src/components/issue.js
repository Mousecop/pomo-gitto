import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/action';
import '../imports/materialize-css/dist/css/materialize.css';

export class Issue extends React.Component {
    constructor(props) {
        super(props)
    };
    disableButton() {
		 this.refs.btn.setAttribute('disabled', 'disabled')
	 }

	 enableButton() {
		 this.refs.btn.removeAttribute('disabled');
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
                        <button className="waves-effect waves-light btn" onClick={this.props.toggleTimeRunning} ref='btn'>Pom This Issue</button>
                       </div>
                    </div>
                </div>

        )
    }
};

const mapDispatchToProps = (dispatch) => ({
	toggleTimeRunning() {
		dispatch(actions.toggleTime())
	}
})
export default connect(null, mapDispatchToProps)(Issue);
