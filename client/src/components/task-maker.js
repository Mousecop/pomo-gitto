import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/action';
import Clock from './clock';

import '../imports/materialize-css/dist/css/materialize.css';
import '../clock.css';

export class TaskMaker extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            tasks: []
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(text, text2) {
        const body = {
            title: text.value,
            description: text2.value
        }

        if (text.value){
            this.setState({tasks:[...this.state.tasks, body]})
        } else {
            return null;
        }
        this.form.reset()
    }


    render () {
        const buttonVisibilty = this.props.isTimeRunning ? 'hidden' : '';
        const strikeThrough = this.props.timeEnded ? 'line-through' : 'none';
        const taskCard = this.state.tasks.map((task, index)=> {
            return(
                <div className="card blue-grey darken-1 hoverable" key={index}>
                    <div className="card-content white-text">
                            <span className="card-title" style={{textDecoration: strikeThrough}}>{task.title}</span>
                            <p>{task.description}</p>
                        <div className="card-action">
                            <button className="waves-effect waves-light btn right"
                        onClick={this.props.toggleTimeRunning} style={{visibility: buttonVisibilty}}>Start the Clock
                            </button>
                        </div>
                    </div>
                </div>
            )
        });
                
        return (
            <div>
                <div className="row">
                    <Clock/>
                    <div className="col s12 m7">
                        <div>
                            <form ref={ref => this.form = ref}>
                            <div className="input-field col s6">
                                <input id="input_text" type="text" data-length="15" placeholder="Title" ref={input => {this.textInput = input; }}/>
                            </div>
                            <div className="input-field col s12">
                                <input id="textarea1" type="text" className="materialize-textarea" data-length="120" placeholder="Description" ref={el => {this.descInput = el;}}/>
                            </div>
                            <div className="col s6">
                                <button className="waves-effect waves-light btn" onClick={() => this.handleClick(this.textInput, this.descInput)}>Pom This Task</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m5">
                        {taskCard}
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
	}
});

const mapStateToProps = (state) => ({
    timeEnded: state.Clock.timeEnded,
    isTimeRunning: state.Clock.isTimeRunning
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskMaker);
