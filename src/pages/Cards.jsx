import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import services from '../services/CRUD'
import { FaPlus } from "react-icons/fa";


function Cards() {
    const [cards, setCards] = useState([]);
    const [colors, setColors] = useState([
        '#698474',
        '#FCF8F3',
        '#FFD3B6',
        '#DCA47C'
    ]);
    useEffect(() => {
        async function fetchData() {
            let data = await services.getData('/cards')
            setCards(data);
        }
        fetchData();
    }, [])

    const handleDelete = async (id) => {
        await services.deleteCards(id);
        let newCards = cards.filter(card => card.id!== id);
        setCards(newCards)
    };

    const handleAdd = async () => {
        let newCard = {
            text: 'The text comes here!',
            color: colors[Math.floor(Math.random() * (colors.length))]
        }
        
        newCard = await services.createCard(newCard);
        let newCards = [...cards, newCard];
        setCards(newCards);
    }
    return (
        <div className='cardsContainer'>
            {cards.map(card =>
                <Card key={card.id} card={card} handleDelete={handleDelete} colors={colors}/>
            )}
            <div className='addCardsBtn' onClick={handleAdd}>
                <FaPlus />
            </div>
        </div>
    )
}

export default Cards
