import React from 'react';
import logo from './jl-logo.png';
import { NavLink } from './NavLink';

function Navbar() {
    return (
            <div className="nav-grid">
                <div className="logo"><img src={logo} alt="logo"/></div>
                <ul>
                    {NavLink.map((item, index) => {
                        return (
                            <div className="nav-links">
                                <li key={index}>
                                    <a className={item.name} href={item.url}>{item.title}</a>
                                </li>
                            </div>
                        )
                    })}
                </ul>
            </div>
    )
}

export default Navbar;
