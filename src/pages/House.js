import Header from "../components/Header";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import data from '../data.json';
import {  useEffect, useState } from "react";
import Error from "../pages/Error404"



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
      
    return (
        <div>
            <Header />
            <h1>{item.title}</h1>
            <h2>{item.location}</h2>
            <ul>
                { item.tags.map((tag) => ( 
                <li key={tag}>{tag}</li>
                ))}
            </ul>
            <p>{item.host.name}</p>
            <img src="{item.host.picture}" alt="Hôte" />
            <Accordion title="Description" active={active} setActive={setActive} content={item.description}/>
            <Accordion title="Equipements" active={active} setActive={setActive} content={equipmentList}/>
            <Footer />
        </div>
    );
};

export default House;