import React from 'react';

const Accordion = () => {
    return (
        <div className='accordion-container'>
            <div className ='accordion-container__card'>
                <div className ='accordion-container__card-heading'>
                    <h2 className='accordion-container__card-title'>Fiabilité</h2>
                    <span>
                        <img src="Vector.png" alt="icône flèche vers le bas" />
                    </span>
                </div>
                <p className='accordion-container__card-content'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
            </div>
            <div className ='accordion-container__card'>
                <div className ='accordion-container__card-heading'>
                    <h2 className='accordion-container__card-title'>Respect</h2>
                    <span>
                        <img src="Vector.png" alt="icône flèche vers le bas" />
                    </span>
                </div>
                <p className='accordion-container__card-content'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </div>
            <div className ='accordion-container__card'>
                <div className ='accordion-container__card-heading'>
                    <h2 className='accordion-container__card-title'>Service</h2>
                    <span>
                        <img src="Vector.png" alt="icône flèche vers le bas" />
                    </span>
                </div>
                <p className='accordion-container__card-content'>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
            </div>
            <div className ='accordion-container__card'>
                <div className ='accordion-container__card-heading'>
                    <h2 className='accordion-container__card-title'>Sécurité</h2>
                    <span>
                        <img src="Vector.png" alt="icône flèche vers le bas" />
                    </span>
                </div>
                <p className='accordion-container__card-content'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </div>
        </div>
    );
};

export default Accordion;