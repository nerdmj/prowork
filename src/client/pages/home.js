import React from 'react';
import { connect } from 'react-redux';


class Home extends React.Component {

    render(){
        return (
            <div>
              <p>Home page with login form</p>
            </div>
        )
    }
}

export default connect(null)(Home);
