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


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Card from './Card';


// const Location = () => {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         axios.get('data.json')
//         .then((res) => setData(res.data))
//     }, [])
//     return (
//         <div className='location'>
//            {
//             data.map((card, id) => 
//                 <Card key={id} card={card}/>
//             )
//            }
//         </div>
//     );
// };

// export default Location;

