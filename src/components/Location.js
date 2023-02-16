import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Location = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('data.json')
        .then((res) => setData(res.data))
    }, [])
    return (
        <div>
           {
            data.map((card, id) => 
                <Card key={id} card={card}/>
            )
           }
        </div>
    );
};

export default Location;