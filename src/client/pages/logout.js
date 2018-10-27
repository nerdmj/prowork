import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';

class Logout extends React.Component {

    constructor(props){
        super(props);
        // logut the user.
        this.props.dispatch(userActions.logout());
    }

    render(){
      return(
        <div className="logout_user">
          <span>you have been logout from the application. Please login again to view the projects.</span>

            <Link to="/">Click here to login</Link>

        </div>
      )
    }

}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

export default connect(mapStateToProps)(Logout);
