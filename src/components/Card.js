import React from 'react';

const Card = ({card}) => {
    console.log(card);
    return (
     <article className='location-card'>
        <img className='location-card__image'src={card.cover} alt={card.title} />
     </article>
    );
};

export default Card;