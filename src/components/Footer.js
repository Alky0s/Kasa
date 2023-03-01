import React from 'react';
import LogoFooter from '../assets/logo_footer.png'

const Footer = () => {
    return (
        <footer className='footer'>
            <img className='footer-logo' src={LogoFooter} alt='logo Kasa' />
            <h4 className='footer-title' >© 2020 Kasa. All rights reserved</h4>
        </footer>
    );
};

export default Footer;