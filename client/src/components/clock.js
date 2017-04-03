import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/action';

import '../imports/materialize-css/dist/css/materialize.css';
import '../clock.css';


export class Clock extends React.Component {
	constructor(props) {
		super(props);
		//state is held here so we can use React lifecycle methods to track the clock
		this.state = {
			seconds: 5
		}

	}
	componentWillUnmount() {
		this.stopCountdown();
	}

// ------------------------------------------------------- Clock logic -------------------------------------------------//
	componentWillReceiveProps(nextProps) {
		if(nextProps.isTimeRunning && !this.props.isTimeRunning) {
			this.onClickHandle();
		} else {
			this.stopCountdown();
		}
  	}

	tick() {
		if (this.state.seconds <= 0) {
			this.props.toggleTimeRunning();
			this.stopCountdown();
			this.props.addPommoHistory();
		} else {
			this.setState({
				seconds: this.state.seconds - 1
			});
		}
  	}

  startCountdown() {
     this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  stopCountdown() {
    this.setState({seconds: 5});
    clearInterval(this.timerID);
  }
// ------------------------------------------------------- Clock logic -------------------------------------------------//
  onClickHandle () {
	  this.startCountdown();
  }
  render() {
		let button = this.props.userSelected ? <button className="waves-effect waves-light btn right"
	   onClick={this.props.toggleTimeRunning}>Start the Clock
   </button> : '';
	  const minutes = Math.floor(this.state.seconds / 60); //math to retrieve minutes and seconds
	  const remSeconds = this.state.seconds % 60;
	  return (
		  <div className="col s12 m5">
			  <div className="card">
					  <div className="card-content center-align">
						  <span className="minutes timer flow-text">{(minutes < 10 ? '0' + minutes : minutes)}</span> {/*Teranary operator to add 0's when necessary*/}
						  <span className="colon timer flow-text"> : </span>
						  <span className="seconds timer flow-text">{(remSeconds < 10 ? '0' + remSeconds : remSeconds)}</span>
					  </div>
					  <div className="card-action">
						  <button className="waves-effect waves-light btn"
							  onClick={() => this.setState({seconds: 5})}>Reset
						  </button>
						  {button}
					  </div>
			  </div>
		  </div>
	  );
  }
}


const mapStateToProps = (state, props) => ({
	isTimeRunning: state.Clock.isTimeRunning,
	seconds: state.Clock.seconds,
	userSelected: state.List.userSelected,
	pommoHistory: state.List.pommoHistory,
	loggedIn: state.List.loggedIn
});

const mapDispatchToProps = (dispatch) => ({
	toggleTimeRunning() {
		dispatch(actions.toggleTime())
	},
	resetClock() {
		dispatch(actions.resetClock())
	},
	addPommoHistory() {
		dispatch(actions.pommoHistory())
	},
	logout() {
		dispatch(actions.fetchLogout());
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Clock);
