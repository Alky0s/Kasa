import Header from "../components/Header";
import Carousel from "../components/Carousel"
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import data from '../data.json';
import {  useEffect, useState } from "react";
import Error from "../pages/Error404"
import RatingStars from "../components/RatingStars";



const House = () => {

    const { id } = useParams();
    const [item, setItem, active, setActive] = useState();

    useEffect(() => {
        const houseDetail = data.find((e) => e.id === id);
    
        setItem(houseDetail);
      });

      if (!item) {
        return <Error />;
      }
    
    const equipmentList = item.equipments.map((e) => <li key={e}>{e}</li>);
    const slides = item.pictures;
    console.log(slides);
    return (
        <div className="house-informations">
            <Header />
            <div>
                <Carousel>
                    { slides.map((p) => ( 
                    <img src={p} alt="Photos du logement" />))}
                </Carousel>
            </div>
            <div className="house-informations__location">
                <h1>{item.title}</h1>
                <h2>{item.location}</h2>
            </div>
            <div className="house-informations__tags">
                <ul>
                    { item.tags.map((tag) => ( 
                    <li key={tag}>{tag}</li>
                    ))}
                </ul>
            </div>
            <div className="house-informations__profile">
                <div className="house-informations__rating">
                    <RatingStars rating={item.rating}/>
                </div>
                <div className="house-informations__host">
                    <p className="house-informations__host-name">{item.host.name}</p>
                    <img className="house-informations__host-picture" src={item.host.picture} alt="Hôte" />
                </div>
            </div>
            <Accordion title="Description" active={active} setActive={setActive} content={item.description}/>
            <Accordion title="Equipements" active={active} setActive={setActive} content={equipmentList}/>
            <Footer />
        </div>
    );
};

export default House;