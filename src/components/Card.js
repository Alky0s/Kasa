import React from 'react';

const Card = ({card}) => {
    console.log(card);
    return (
     <article>
        <img src={card.cover} alt={card.title} />
     </article>
    );
};

export default Card;