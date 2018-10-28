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
                  <ul className="topnav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">
                      About Us
                    </Link></li>
                    <li><Link to="/">Services</Link></li>
                    <li><Link to="/">Clients</Link></li>
                    <li><Link to="/">Contact Us</Link></li>
                  </ul>
                </div>

            </header>
        );
    }
}

export default Header;
