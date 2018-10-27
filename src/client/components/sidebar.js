import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import URL from '../constants/routes';

class SideBar extends React.Component {

    render() {
      let authenticateUser = localStorage.getItem('user');
        return (
            <Fragment>
                <div className="logo">
                    <Link to="/" >
                       ProWorkflow
                    </Link>
                </div>

                <nav className="signbar_nav">
                    <div>
                        Main navigation
                    </div>

                    <div>
                        { authenticateUser === null &&
                            <ul>
                                <li>
                                    <Link to="/" >
                                        Sign In</Link>
                                </li>
                            </ul>
                        }

                        { authenticateUser != null &&
                            <ul>
                                <li>
                                    <Link to={URL.PROJECT_LISTING}>
                                        Project Listing</Link>
                                </li>

                                <li>
                                    <Link to={URL.SIGN_OUT}>
                                        Sign Out</Link>
                                </li>
                            </ul>
                        }

                    </div>
                </nav>
            </Fragment>
        );
    }
}

export default SideBar;
