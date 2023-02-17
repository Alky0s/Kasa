import React from 'react';
import '../styles/home-banner.css'

const HomeBanner = () => {
    return (
        <div className='home-banner'>
            <h1 className='home-banner__title'>Chez vous, partout et ailleurs</h1>
            <img className='home-banner__image'src="background.png" alt="background title" />
        </div>
    );
};

export default HomeBanner;