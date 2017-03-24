import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/action';
import '../imports/materialize-css/dist/css/materialize.css';


export class Login extends React.Component {
    render () {
        return (
            <div className="col s12 m7">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <span className="card-title">Tackle Your Issues</span>
                      <p>The Pomodoro Technique is a powerfully simple productivity paradigm that is changing how people work.</p>
                      <p>
                          Login to Github to see all the issues assigned to you and start pomming them away.
                      </p>
                      <p>
                          Or simply use the pom clock for other tasks.
                      </p>

                    </div>
                    <div className="card-action">

                         <a href="https://pomo-gitto.herokuapp.com/api/auth/github"><button className="waves-effectwaves-light btn" >GitHub</button></a><span>   </span>
                          <a href="/#/tasks"><button className="waves-effectwaves-light btn">No Git For Me</button></a>

                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    gitLogin() {
        dispatch(actions.gitLogin());
    }
})



export default connect(null, mapDispatchToProps)(Login);
