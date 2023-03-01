import React from 'react';

const Card = ({card}) => {
    console.log(card);
    return (
     <article className='location-card'>
        <a href='#'>
            <img className='location-card__image'src={card.cover} alt={card.title} />
            <h3 className='location-card__title'>{card.title}</h3>
        </a>
        
     </article>
    );
};

export default Card;