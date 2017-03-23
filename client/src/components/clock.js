import React from 'react';
import { connect } from 'react-redux';
import { toggleTime, resetClock, pommoHistory } from '../actions/action';
import '../imports/materialize-css/dist/css/materialize.css';
import '../clock.css';


let btnRef;
export class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds: 5
		}

	}
	componentWillUnmount() {
		this.stopCountdown();
	}

	componentDidMount() {
         if(this.props.issueSelected === false) {
            this.disableButton();
        } else {
            this.enableButton();
        }
     }

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

  onClickHandle () {
	  this.startCountdown();
  }
  render() {
		let button = this.props.userSelected ? <button className="waves-effect waves-light btn"
	   onClick={this.props.toggleTimeRunning}>Start the Clock
   </button> : '';
	  const minutes = Math.floor(this.state.seconds / 60);
	  const remSeconds = this.state.seconds % 60;
	  return (
		  <div className="col s12 m5">
			  <div className="card">
					  <div className="card-content">
						  <span className="minutes timer flow-text">{(minutes < 10 ? '0' + minutes : minutes)}</span>
						  <span className="colon timer flow-text"> : </span>
						  <span className="seconds timer flow-text">{(remSeconds < 10 ? '0' + remSeconds : remSeconds)}</span>
					  </div>
					  <div className="card-action">
						  <button className="waves-effect waves-light btn"
							  onClick={() =>{this.setState({seconds: 5})}}>Reset
						  </button>
						  {button}
					  </div>
			  </div>
		  </div>
	  );
  }
>>>>>>> c82178accbdd2eb5b05392c3ebe36714ce29e195
}


const mapStateToProps = (state, props) => ({
	isTimeRunning: state.Clock.isTimeRunning,
	seconds: state.Clock.seconds,
<<<<<<< HEAD
	issueSelected: state.List.issueSelected
=======
	userSelected: state.List.userSelected,
	pommoHistory: state.List.pommoHistory
>>>>>>> c82178accbdd2eb5b05392c3ebe36714ce29e195
});

const mapDispatchToProps = (dispatch) => ({
	toggleTimeRunning() {
		dispatch(toggleTime())
	},
	resetClock() {
		dispatch(resetClock())
	},
	addPommoHistory() {
		dispatch(pommoHistory())
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Clock);
