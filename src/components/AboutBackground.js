import React from 'react';
import aboutBack from '../assets/about-background.png'

const AboutBackground = () => {
    return (
        <div>
            <img className='about-background' src={aboutBack} alt='Paysage montagneux'></img>
        </div>
    );
};

export default AboutBackground;