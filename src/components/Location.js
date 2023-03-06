import Card from './Card';
import data from '../data.json';

const Location = () => {
    return (
        <div className='location'>
            {
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




