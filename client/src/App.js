import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/clock';
import {connect} from 'react-redux';
import * as actions from './actions/action';
import IssueList from './components/issue-list';

class App extends Component {
	render() {
        return (
        <Clock />
        );
	}
}

export default App;
