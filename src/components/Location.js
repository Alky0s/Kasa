import Card from './Card';
import data from '../data.json';

const Location = () => {
    return (
        <div className='location'>
            {
                // I use the map method to get data from our JSON file
                data.map((card, id) => {
                    return (
                        <Card key={id} card={card}/>
                    )
                })
            }
        </div>
    )
};

export default Location;




