import React from 'react';
import { Link } from 'react-router-dom';

// I give to the function my props key "card" to get all I need from our JSON file
const Card = ({card}) => {
        return (
            <article className='location-card'>
               <Link to={`/house/${card.id}`}>
               <div className='location-card-container'>
                  <div className='gradient'></div>
                  <img className='location-card__image'src={card.cover} alt={card.title} />
               </div>
               <h3 className='location-card__title'>{card.title}</h3>
               </Link>
            </article>
           );
};

export default Card;