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
        <div className="appContainer">
            <h1 className="title">PomoGitto</h1>
            <Clock />
            <IssueList />
        </div>
        );
	}
}

export default App;
