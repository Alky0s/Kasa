import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import ChevronL from "../assets/chevronL.png"
import ChevronR from "../assets/chevronR.png"


export default function Carousel () {
    const { id } = useParams();
    const houseDetail = data.find((object) => object.id === id);
    const pictures = houseDetail.pictures;

    const [currentIndex, setCurrentIndex] = useState(0)

    const prev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const next = () => {
        const isLastSlide = currentIndex === pictures.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    return (
        <div className='carousel-slides'>
                <img className="leftArrow" src={ChevronL} alt="Left arrow"  onClick={prev}/>
                <img className="rightArrow" src={ChevronR} alt="Right arrow" onClick={next}/>
                {pictures.map((img, index) => {
                    return (
                    <div key={index}>
                        {index === currentIndex && (
                        <img
                            src={img}
                            alt="Photos du logement"
                            className="carousel-picture"
                        />
                        )}
                        {/* Pictures number */}
                        {index === currentIndex && (
                        <strong className="picture-number">
                            {currentIndex + 1}/{pictures.length}
                        </strong>
                        )}
                </div>
                );
            })}    
        </div>
             
            
            
            
        
           
          
        
    )
}