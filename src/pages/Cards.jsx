import React, { useEffect, useState } from 'react'
//import http from '../services/Axios';
import Card from '../components/Card'
import { IoMdAddCircleOutline } from "react-icons/io";


function Cards() {
    const [cards, setCards] = useState([
        {
            text: '1',
            color: '#DCA47C',
        },
        {
            text: '2',
            color: '#698474',
        }
    ]);
    useEffect(() => {
        async function fetchData() {
            // const response = await http.getData('/cards');
            // setCards(response.json());
        }
        fetchData();
    }, [])
    return (
        <div className='cardsContainer'>
            {cards.map(card =>
                <Card card={card} />
            )}
            <div>
                <IoMdAddCircleOutline />
            </div>
        </div>
    )
}

export default Cards
