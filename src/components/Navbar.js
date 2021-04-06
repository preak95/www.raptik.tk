import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="nav-wrapper darken-3">
            <div className="container">
                <a className="brand-logo left tkl-logo">T.K.L</a>

                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/get">Creations</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;