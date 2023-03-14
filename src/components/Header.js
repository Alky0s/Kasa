import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png'

const Header = () => {
    return (
        <header className="header-home">
            <img className="header-home__logo" src={Logo} alt="logo Kasa" />
            <nav className='header-home__nav'>
                <ul>
                    <li className='header-home__nav--accueil'>
                    <NavLink to ="/">Accueil</NavLink></li>
                    <li className='header-home__nav--apropos'>
                    <NavLink to ="/about">A propos</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;