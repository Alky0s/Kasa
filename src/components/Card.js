import React from 'react';
import { Link } from 'react-router-dom';


const Card = ({card}) => {
        return (
            <article className='location-card'>
               <Link to={`/house/${card.id}`}>
               <img className='location-card__image'src={card.cover} alt={card.title} />
               <h3 className='location-card__title'>{card.title}</h3>
               </Link>
            </article>
           );
};

export default Card;