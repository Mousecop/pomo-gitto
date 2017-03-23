import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/clock';
import {connect} from 'react-redux';
import * as actions from './actions/action';
import IssueList from './components/issue-list';
import Login from './components/login';

class App extends Component {
	render() {
        return (
        <div className="z-depth-3">
            <h1 className="title">PomoGitto</h1>
            <div className="row">
				<Clock />
	            {this.props.children}
			</div>
        </div>
        );
	}
}

export default App;
