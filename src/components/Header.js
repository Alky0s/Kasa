import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header-home">
            <img className="header-home__logo" src="logo.png" alt="logo Kasa" />
            <nav className='header-home__nav'>
                <ul>
                <NavLink className="header-home__link" to ="/">
                    <li className='header-home__nav--accueil'>Accueil</li>
                </NavLink>
                <NavLink to ="/about">
                    <li className='header-home__nav--apropos'>A propos</li>
                </NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default Header;