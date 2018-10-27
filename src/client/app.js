import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { alert } = this.props;
        return (
            <div>
                <p> ProWork Login Sytem</p>
            </div>
        );
    }
}

export default App;
