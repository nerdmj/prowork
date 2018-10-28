import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { userActions } from '../actions';

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            ...initialState
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount() {
    //     this.props.dispatch(userActions.getAll());
    // }

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
            dispatch(userActions.getAll());
        }
    }

    render(){
        const { user, users } = this.props;

        const { username, password, error, submitted } = this.state;
        let authenticateUser = localStorage.getItem('user');

        return (
            <div>



            { authenticateUser != null &&
            <h2>You are already logged-in. </h2>
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
                                            {users.error && <span className="text-danger">ERROR: Unauthorized User</span>}
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

Home.propTypes = {
  user: PropTypes.string,
  users: PropTypes.object,
};

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

export default connect(mapStateToProps)(Home);
