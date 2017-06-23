import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/clock';
import {connect} from 'react-redux';
import * as actions from './actions/action';
import IssueList from './components/issue-list';
import Login from './components/login';

export class App extends Component {
	render() {
		let logoutButton = this.props.loggedIn ?   <button className="waves-effect waves-light btn right logoutButton"
						  onClick={() => this.props.logout()}>Logout
					  </button> : '';

        return (
        <div className="">
			<header className='header'>
				{logoutButton}
            	<h1 className="title" ><a href="/">PomoGitto</a></h1>
			</header>
			<div>
				{this.props.children}
			</div>
			<footer className="footer">
				<p>Built by <a href="https://github.com/Jean-Luc19">Aaron Gottlieb</a> & <a href="https://github.com/Mousecop">Jacob Askew</a></p>
			</footer>
        </div>
        );
	}
}

const mapStateToProps = (state) => ({
	loggedIn: state.List.loggedIn
});

const mapDispatchToProps = (dispatch) => ({
	logout() {
		dispatch(actions.fetchLogout());
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
