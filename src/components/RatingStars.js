import React from 'react';
import Star from '../assets/star.png'
import RedStar from '../assets/redstar.png'

const RatingStars = ({rating}) => {
    const numberStars = [1, 2, 3, 4, 5];
    return (
        <div className='rating-stars'>
            {numberStars.map((star) =>
                rating >= star ? (
                    <img
                        key={star.toString()}
                        className="stars"
                        src={RedStar}
                        alt="étoile"
                    />
                    ) : (
                        <img
                          key={star.toString()}
                          className="stars"
                          src={Star}
                          alt="étoile"
                        />
                ))}
        </div>
    );
};

export default RatingStars;