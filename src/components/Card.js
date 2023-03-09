import React from 'react';
import { Link } from 'react-router-dom';


const Card = ({card}) => {
        return (
            <article className='location-card'>
               <Link to={`/house/${card.id}`}>
                <div className='location-card__content'>
                   <img className='location-card__content-image'src={card.cover} alt={card.title} />
                   <h3 className='location-card__content-title'>{card.title}</h3>
                </div>
               </Link>
            </article>
           );
};

export default Card;