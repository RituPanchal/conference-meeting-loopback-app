import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo center">CONFERENCE</a>
                        <a data-target="main-menu" className="sidenav-trigger button-collapse show-on-large"><i className="fa fa-bars"></i></a>
                        <ul className="right hide-on-small-only">
                            <li><Link to="/"><i className="fa fa-users"></i> Members</Link></li>
                        </ul>
                        <ul className="sidenav" id="main-menu">
                            <li><Link to="/"><i className="fa fa-users"></i> Members</Link></li>
                            <li><Link to="/members/add"><i className="fa fa-plus"></i> Invite Members</Link></li>
                            <li><Link to="/about"><i className="fa fa-question-circle"></i> About</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;