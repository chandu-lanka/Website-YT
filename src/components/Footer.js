import React from 'react';
import logo from '../imgs/logo_channel.png'
import "./styles/Footer.css"
import {Switch, Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <img className="logo" src={logo} alt="logo"/>
            <Switch>
                <Link to="/" className="nav-link">Home</Link>
            </Switch>
            <Switch>
                <Link to="/tuts" className="nav-link">Tutorials</Link>
            </Switch>
            <Switch>
                <Link to="/devlogs" className="nav-link">Devlogs</Link>
            </Switch>
            <Switch>
                <Link to="/blog" className="nav-link">Our Blog</Link>
            </Switch>
            <span className="copyright">© The Orange Triangle | 2021 | All Rights Reserved</span>
        </div>
    )
}

export default Footer
