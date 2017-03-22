import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/clock';
import {connect} from 'react-redux';
import * as actions from './actions/action';
import IssueList from './components/issue-list';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
      		paused: true
   		}
   		this.handleOnClick = this.handleOnClick.bind(this);
	}

	handleOnClick() {
    this.setState ({
      paused: false
    })
}
	render() {
		return (
        	<div>
				<Clock  paused={this.state.paused}/>
				<IssueList onClick={this.handleOnClick}/>
			</div>

    	);
	}
}

export default App;
