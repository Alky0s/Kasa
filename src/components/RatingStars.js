import React from 'react';
import Star from '../assets/star.png'
import RedStar from '../assets/redstar.png'


const RatingStars = ({rating}) => {
    const numberStars = [1, 2, 3, 4, 5];
    return (
        <div>
            {numberStars.map((star) =>
                rating >= star ? (
                    <img
                        key={star.toString()}
                        className=""
                        src={RedStar}
                        alt=""
                    />
                    ) : (
                        <img
                          key={star.toString()}
                          className=""
                          src={Star}
                          alt=""
                        />
                ))}
        </div>
    );
};

export default RatingStars;