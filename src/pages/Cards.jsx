import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import services from '../services/CRUD'
import { FaPlus } from "react-icons/fa";
import { BsSearchHeart } from "react-icons/bs";



function Cards() {
    const [cards, setCards] = useState([]);
    const [search, setSearch] = useState('');
    const [cardsToShow, setCardsToShow] = useState([]);
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

    useEffect(() => {
        handleSearch(search)
    }, [cards, search]);
    const handleDelete = async (id) => {
        await services.deleteCards(id);
        let newCards = cards.filter(card => card.id !== id);
        setCards(newCards);
    };

    const handleAdd = async () => {
        let newCard = {
            text: 'The text comes here!',
            color: colors[Math.floor(Math.random() * (colors.length))]
        }

        newCard = await services.createCard(newCard);
        let newCards = [...cards, newCard];
        setCards(newCards);
        setSearch('');
    }

    const handleSearchChange = async (e) => {
        setSearch(e.target.value);
    }

    const handleSearch = async (search) => {
        let filteredCards = cards.filter(card => card.text.toLowerCase().includes(search.toLowerCase()));
        setCardsToShow(filteredCards);
    }

    const handleEdit = (editedCard) => {
        let index = cards.findIndex(c => c.id===editedCard.id);
        let newCards = [...cards];
        newCards[index] = editedCard;
        setCards(newCards);
    }

    return (
        <>
            <div class="search-container">
                <input type="text" value={search} onChange={handleSearchChange} class="search-input" />
                <BsSearchHeart className='beSearchHeart'/>
            </div>
            <div className='cardsContainer'>
                {cardsToShow.map(card =>
                    <Card key={card.id} card={card} handleDelete={handleDelete} colors={colors} handleEdit={handleEdit} />
                )}
                <div className='addCardsBtn' onClick={handleAdd}>
                    <FaPlus />
                </div>
            </div>
        </>
    )
}

export default Cards
