import React, { useState } from 'react';
import logo from './jl-logo.png';
import { NavLink } from './NavLink';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const showMenu = () => setIsOpen(!isOpen);

    return (
        <div className="nav-grid">

            <Link to='#' className="menu-bars">
                <FontAwesomeIcon icon={faBars} className="fa-2x fa-fw" onClick={showMenu} />
            </Link>

            <nav className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-links">
                    <li>
                        <Link to='#' className="menu-exit">
                            <FontAwesomeIcon icon={faTimes} onClick={showMenu} className="fa-2x fa-fw" />
                        </Link>
                    </li>

                    <Link to='/home' className="logo" onClick={showMenu}><img src={logo} alt="logo" /></Link>
                    {NavLink.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.path} className={item.name} onClick={showMenu}>{item.title}</Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
