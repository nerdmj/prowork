import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';

class Home extends React.Component {

    constructor(props){
        super(props);

        // // reset login status
        // this.props.dispatch(userActions.logout());

        this.state = {
            ...initialState
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    clearState() {
        this.setState({...initialState})
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submitted: true });
        let {username, password} = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render(){
        const { loggingIn } = this.props;
        const { username, password, error, submitted } = this.state;
        let authenticateUser = localStorage.getItem('user');

        return (
<div>
            { authenticateUser != null &&
            <h2>Hello loggedIn user</h2>
            }

            { authenticateUser === null &&
            <div className="column column_12_12">

                <div className="signUp authForm">

                    <h1 className="dark_headline">
                        Sign IN
                    </h1>

                                <form name="form" className="form" onSubmit={this.handleSubmit}>

                                    <div className="form_wrap">

                                        <div>
                                            {this.state.error}
                                        </div>

                                        <div className="form_row">

                                            <div className="form_item">
                                                <div className="form_input">
                                                    <input type="text" required name="username" placeholder="username" value={username} onChange={this.handleChange} />
                                                    <span className="bottom_border"></span>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="form_row">

                                            <div className="form_item">
                                                <div className="form_input">
                                                    <input type="password" required name="password" placeholder="Password" value={password} onChange={this.handleChange} />
                                                    <span className="bottom_border"></span>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="form_buttons">
                                            <button className="btn">
                                            SIGN IN</button>
                                        </div>

                                    </div>

                                </form>
                </div>
            </div>
          }
        </div>
        )
    }
}

const initialState = {
    username: '',
    password: '',
    error: '',
    submitted: false
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

export default connect(mapStateToProps)(Home);
