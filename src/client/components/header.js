import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header>

                <div className="header_links">
                    <Link to="/">Home</Link>
                    <Link to="/">
                      About Us
                    </Link>
                    <Link to="/">Services</Link>
                    <Link to="/">Clients</Link>
                    <Link to="/">Contact Us</Link>
                </div>

            </header>
        );
    }
}

export default Header;
