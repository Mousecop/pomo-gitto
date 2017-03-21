import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/clock';

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
    console.log('clicked ' + this.state.paused)
}
	render() {
		return (
        <Clock onClick={this.handleOnClick} paused={this.state.paused}/>
    );
	}
}

export default App;
