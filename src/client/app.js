import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { connect } from 'react-redux';

import URL from './constants/routes';
import MainLayout from './layouts/mainLayout';
import Home from './pages/home';
import ProjectListing from './pages/projects/listing';
import ProjectDetail from './pages/projects/detail';
import NotFound from './pages/404';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { alert } = this.props;
        return (
            <div>
                <Router history={history}>
                  <React.Fragment>
                    <Switch>
                      <Route path={URL.PROJECT_LISTING} render={props => (
                                          <MainLayout>
                                              <ProjectListing {...props} />
                                          </MainLayout>
                                    )} />

                      <Route path={URL.PROJECT_DETAIL} render={props => (
                                          <MainLayout>
                                              <ProjectDetail {...props} />
                                          </MainLayout>
                                    )} />

                      <Route path={URL.DEFAULT} exact render={props => (
                              <MainLayout>
                                  <Home {...props} />
                              </MainLayout>
                        )} />

                      <Route path='*' render={props => (
                                <MainLayout>
                                    <NotFound {...props} />
                                </MainLayout>
                      )} />

                  </Switch>
                  </React.Fragment>
                </Router>
            </div>
        );
    }
}

export default App;
