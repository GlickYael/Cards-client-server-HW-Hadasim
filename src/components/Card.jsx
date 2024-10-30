import React, { useState } from 'react'
import { IoMdTrash } from "react-icons/io";
import services from '../services/CRUD';
import ColorsPalette from './ColorsPalette'

function Card({ card, handleDelete, colors }) {
    const [editText, setEditText] = useState(false);
    const [editColor, setEditColor] = useState(false);
    const [cardData, setCardData] = useState(card);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCardData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEditColor = async (color) => {
        setEditColor(false);
        let newCard = { ...cardData, color: color };
        setCardData(newCard);
        await services.editCards(newCard);
        setEditColor(false);
    }

    const handleSaveText = async () => {
        await services.editCards(cardData)
        setEditText(false);
    };

    const handleKeyDown = (e) => {
        if (editText && e.key === 'Enter') {
            handleSaveText(); // Call save function when Enter is pressed
        }
    };

    return (
        <div className='card' style={{ backgroundColor: `${cardData.color}` }}>
            {!editText && <p className='textInCard' onClick={() => setEditText(true)}>{cardData.text}</p>}
            {editText && <input className='textInCard' type="text"
                name="text"
                value={cardData.text}
                onChange={handleChange}
                onKeyDown={handleKeyDown} />}
            <div>
                {!editColor && <div className='cardColor'>
                    <div onClick={() => setEditColor(true)} className='color' style={{ backgroundColor: cardData.color }}></div></div>}
                {editColor && <ColorsPalette colors={colors} handleEditColor={handleEditColor} />}
                <button className='cardTrash' onClick={() => handleDelete(cardData.id)}><IoMdTrash /></button>
            </div>
        </div>
    )
    
}

export default Card
