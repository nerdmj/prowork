import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import URL from './constants/routes';

import { history } from './utils/index';
import { alertActions } from './actions/index';
import { PrivateRoute } from './hoc/index';

import MainLayout from './layouts/mainLayout';
import Home from './pages/home';
import ProjectListing from './pages/projects/listing';
import ProjectDetail from './pages/projects/detail';
import Logout from './pages/logout';
import NotFound from './pages/404';

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        <Router history={history}>
                            <div>
                              <Switch>
                                <PrivateRoute path={URL.PROJECT_LISTING} component={ProjectListing} />

                                <PrivateRoute path={URL.PROJECT_DETAIL} component={ProjectDetail} />

                                <Route path={URL.DEFAULT} exact render={props => (
                                      <MainLayout>
                                          <Home {...props} />
                                      </MainLayout>
                                )} />

                                <Route path={URL.SIGN_OUT} exact render={props => (
                                          <Logout {...props} />
                                )} />

                                <Route path='*' render={props => (
                                          <MainLayout>
                                              <NotFound {...props} />
                                          </MainLayout>
                                )} />
                            </Switch>
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

export default connect(mapStateToProps)(App);
