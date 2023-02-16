import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <img src="logo.png" alt="logo Kasa" />
            <ul>
                <NavLink to ="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to ="/about">
                    <li>A propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Header;