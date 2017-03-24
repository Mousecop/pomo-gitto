import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/action';

import '../imports/materialize-css/dist/css/materialize.css';
import '../clock.css';

export class TaskMaker extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            hidden: ''
        }
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick(text, text2) {
        this.setState({title: text.value, description: text2.value, hidden: 'hidden'})

    }


    render () {
        let taskCard = this.state.title.length > 5 ?
                <div className="card blue-grey darken-1 hoverable">
                    <div className="card-content white-text">
                         <span className="card-title">{this.state.title}</span>
                         <p>{this.state.description}</p>
                       <div className="card-action">
                           <button className="waves-effect waves-light btn right"
                   	   onClick={this.props.toggleTimeRunning}>Start the Clock
                          </button>
                       </div>
                    </div>
                </div> : '';
        return (
            <div className="col s12 m7">
                {taskCard}
                <div className={this.state.hidden}>
                    <div className="input-field col s6">
                        <input id="input_text" type="text" data-length="15" placeholder="Title" ref={input => {this.textInput = input; }}/>
                    </div>
                    <div className="input-field col s12">
                         <textarea id="textarea1" className="materialize-textarea" data-length="120" placeholder="Description" ref={el => {this.descInput = el;}}></textarea>
                    </div>
                    <div className="col s6">
                        <button className="waves-effect waves-light btn" onClick={() => this.handleClick(this.textInput, this.descInput)}>Pom This Task</button>
                    </div>
                </div>
            </div>
        )

    }
}
const mapDispatchToProps = (dispatch) => ({
	toggleTimeRunning() {
		dispatch(actions.toggleTime())
	},

	addPommoHistory() {
		dispatch(actions.pommoHistory())
	},

})

export default connect(null, mapDispatchToProps)(TaskMaker);
