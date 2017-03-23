import React from 'react';
import { connect } from 'react-redux';
import { toggleTime, resetClock } from '../actions/action';
import '../imports/materialize-css/dist/css/materialize.css';
import '../clock.css';

export class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds: 5
		}
		this.onClickHandle = this.onClickHandle.bind(this);
	}

	componentWillUnmount() {
		this.stopCountdown();
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.isTimeRunning && !this.props.isTimeRunning) {
			this.onClickHandle();
		} else {
			this.stopCountdown();
		}
  	}

	disableButton() {
		 this.refs.btn.setAttribute('disabled', 'disabled')
	 }

	 enableButton() {
		 this.refs.btn.removeAttribute('disabled');
	 }

	tick() {
		if (this.state.seconds <= 0) {
			this.props.toggleTimeRunning();
			this.stopCountdown();
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
	this.enableButton();
    clearInterval(this.timerID);
  }

  onClickHandle () {
	  this.startCountdown();
	  this.disableButton();
  }


	render() {
		const minutes = Math.floor(this.state.seconds / 60);
		const remSeconds = this.state.seconds % 60;
		return (
			<div className=" clockContainer container z-depth-3">
				<div className="clock">
					<span className="minutes timer flow-text">{(minutes < 10 ? '0' + minutes : minutes)}</span>
					<span className="colon timer flow-text"> : </span>
					<span className="seconds timer flow-text">{(remSeconds < 10 ? '0' + remSeconds : remSeconds)}</span>
				</div>
				<button onClick={this.props.toggleTimeRunning} ref='btn' className="resetButton">Start Clock</button>
			</div>
    	);
	}
}


const mapStateToProps = (state, props) => ({
	isTimeRunning: state.Clock.isTimeRunning,
	seconds: state.Clock.seconds
});

const mapDispatchToProps = (dispatch) => ({
	toggleTimeRunning() {
		dispatch(toggleTime())
	},
	resetClock() {
		dispatch(resetClock())
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Clock);
